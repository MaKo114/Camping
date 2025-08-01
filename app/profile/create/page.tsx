import { createProfileAction } from "@/action/action";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/Forminput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



const CreateProfile = async() => {
  const user = await currentUser()
  if(user?.privateMetadata.hasProfile) redirect('/')
    
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
            />
            <FormInput
              name="userName"
              type="text"
              label="Username"
              placeholder="Username"
            />
          </div>
          <SubmitButton
            className="text-white bg-green-500"
            text="create profile"
            size="lg"
          ></SubmitButton>
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfile;
