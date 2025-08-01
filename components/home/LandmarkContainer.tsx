import { fetchLandmarks } from "@/action/action"
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";


const LandmarkContainer = async () => {
    const landmarks:LandmarkCardProps[] = await fetchLandmarks()
    console.log(landmarks);
    
  return (
    <div>
        <LandmarkList Landmarks={landmarks}/>

    </div>
  )
}

export default LandmarkContainer