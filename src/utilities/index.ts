import acaiCherry from '../assets/acai+cherry.jpg'
import beetAvocadoPoke from '../assets/beet+avocado-poke.jpg'
import chocolateBlueberry from '../assets/chocolate+blueberry.jpg'
import cinnamonBanana from '../assets/cinnamon+banana.jpg'
import gingerGreens from '../assets/ginger+greens.jpg'
import mushroomMiso from '../assets/mushroom+miso.jpg'
import { ProductName } from '../types'

export const getProductImageSource = (name: ProductName) => {
  const imageSources = {
    'Acai + Cherry': acaiCherry,
    'Chocolate + Blueberry': chocolateBlueberry,
    'Beet + Avocado Poke': beetAvocadoPoke,
    'Cinnamon + Banana': cinnamonBanana,
    'Mushroom + Miso': mushroomMiso,
    'Ginger + Greens': gingerGreens,
  }

  return imageSources[name]
}
