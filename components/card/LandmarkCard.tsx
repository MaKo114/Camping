import { LandmarkCardProps } from '@/utils/types'
import Image from 'next/image'
import LandmarkStarRating from './LandmarkStarRating'
import FavoriteToggleButton from './FavoriteToggleButton'

const LandmarkCards = ({ Landmark } : { Landmark: LandmarkCardProps}) => {
  const { name, image, id, price, description, province, lat, lng, category } = Landmark
  return (
    <article className='group relative'>
      <div className='relative h-[300px] rounded-md mb-2'>
        <Image 
        src={image}
        sizes='(max-width:768px) 100vw, 50vw'
        alt={name}
        fill
        className='object-cover rounded-md 
        group-hover:scale-105 
        transition-transform duration-300'
        />
      </div>

      <div className='flex items-center justify-between'>
        <h3 className='text-sm font-semibold mt-1'>{name.substring(0, 30)}</h3>
          <LandmarkStarRating/>
      </div>

    <p className='text-sm mt-1 text-muted-foreground'>
      {description.substring(0, 40)}
    </p>

    <div className='flex items-center justify-between mt-1 font-semibold text-sm'>
      <span>THB {price}</span>
      <p>{province}</p>
    </div>

    <div className='absolute top-5 right-5'>
      <FavoriteToggleButton LandmarkId={id}/>
    </div>

    </article>
  )
}

export default LandmarkCards