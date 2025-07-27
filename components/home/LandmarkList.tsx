import LandmarkCards from '../card/LandmarkCard'
import { LandmarkCardProps } from '@/utils/types'

const LandmarkList = ({ Landmarks }:{Landmarks: LandmarkCardProps[]}) => {
  return (
    <section className='grid sm:grid-cols-2 lg:grid-cols-3 cl:grid-cols:3 gap-8 mt-4'>
        {
        Landmarks.map((Landmark)=>{
            
            return <LandmarkCards key={Landmark.id} Landmark={Landmark}/>
        })
        }
    </section>
  )
}

export default LandmarkList