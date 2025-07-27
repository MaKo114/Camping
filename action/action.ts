"use server";
import { imageSchema, landmarkSchema, profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { prisma } from '@/utils/db'
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";

const getAuthUser = async()=>{
    //code body
    const user = await currentUser()
    if(!user){
        throw new Error('You must logged!!!')
    }
    if(!user.privateMetadata.hasProfile) redirect('/proflie/create')
    return user
}

const renderError = (error: unknown):{message: string} => {
    //code body
    return {
        message: error instanceof Error ? error.message : 'An Error!!!'
    }
}

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser()
    if(!user) throw new Error('Please Login!!!')

    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    // console.log("validated", validateField);


    await prisma.profile.create({
        data:{
            clerkId: user.id,
            email: user.externalAccounts[0].emailAddress,
            profileImage: user.externalAccounts[0].imageUrl ?? '',
            ...validateField
        }
    })
    const client = await clerkClient()
    await client.users.updateUserMetadata(user.id, {
        privateMetadata:{
            hasProfile: true
        }
    })

    // return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error)
  }
  redirect('/')
};


export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
):Promise<{message: string}> => {
  try {
    const user = await getAuthUser()
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;
    
    // step 1 validate data
    const validatedFile = validateWithZod(imageSchema, { image:file})
    const validateField = validateWithZod(landmarkSchema, rawData);
    
    // step 2 upload image to supabase
    const fullPath = await uploadFile(validatedFile.image)
    console.log(fullPath);
    

    // step 3 insert to db 
    await prisma.landmark.create({
      data:{
        ...validateField,
        image: fullPath,
        profileId: user.id
      }
    })


   //return { message: "Create Landmark Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error)
  }
redirect('/')
};


export const fetchLandmarks = async () => {
  const landmarks = await prisma.landmark.findMany({
    orderBy: {
      createAt: 'desc'
    }
  })
  return landmarks
}