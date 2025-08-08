import { fecthFavorites } from '@/action/action'
import LandmarkList from '@/components/home/LandmarkList';

const FavotitesPage = async() => {
  const favorites = await fecthFavorites()
  console.log(favorites);
  
  return (
    <LandmarkList landmarks={favorites}></LandmarkList>
  )
}

export default FavotitesPage