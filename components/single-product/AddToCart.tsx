import { Button } from '../ui/button'

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className='capitalize mt-8' size='lg'>
      Ajouter au panier
    </Button>
  )
}

export default AddToCart
