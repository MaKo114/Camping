import { createLandmarkAction, createProfileAction } from "@/action/action";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/Forminput";
import ImageInput from "@/components/form/ImageInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import MapLandmark from "@/components/map/MapLandmark";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Landmark
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              type="text"
              label="Landmark Name"
              placeholder="Landmark Name"
            />
            <CategoryInput></CategoryInput>
          </div>
          <TextAreaInput name="description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              label="Price"
              type="number"
              placeholder="Price"
            />
            <ProvinceInput></ProvinceInput>
          </div>

          <ImageInput></ImageInput>


          <MapLandmark location={{lat:13.361143, lng:100.984673}}></MapLandmark> 
          {/* lat:13.361143, lng:100.984673 Chonburi */}

          <SubmitButton
            className="text-white bg-green-500"
            text="create landmark"
            size="lg"
          ></SubmitButton>

          {/* category */}
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfile;
