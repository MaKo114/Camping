import { Heart } from "lucide-react"
import { Button } from "../ui/button"
import { auth } from "@clerk/nextjs/server"
import { SignInCardButton } from "../form/Buttons"

const FavoriteToggleButton = async({ LandmarkId }:{ LandmarkId:string }) => {
  const { userId } = await auth()
  
  if(!userId)return <SignInCardButton/>
  return (
    <Button size='icon'>
      <Heart />
    </Button>
  )
}

export default FavoriteToggleButton