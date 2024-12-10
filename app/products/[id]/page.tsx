import BreadCrumbs from '@/components/single-product/BreadCrumbs'
import { fetchSingleProduct, findExistingReview } from '@/utils/actions'
import Image from 'next/image'
import { formatCurrency } from '@/utils/format'
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton'
import AddToCart from '@/components/single-product/AddToCart'
import ProductRating from '@/components/single-product/ProductRating'
import ShareButton from '@/components/single-product/ShareButton'
import SubmitReview from '@/components/reviews/SubmitReview'
import ProductReviews from '@/components/reviews/ProductReviews'
import { auth } from '@clerk/nextjs/server'

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id)
  const { price, image, description, company, name } = product
  const eurosAmount = formatCurrency(price)
  const { userId } = auth()
  const reviewDoesNotExist =
    userId && !(await findExistingReview(product.id, userId))

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg: gap-x-6'>
        {/* Image first col */}
        <div className='relative h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw '
            priority
            className='w-full'
          />
        </div>
        {/* Info second col */}
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name}</h1>
            <div className='flex items-center gap-x-2'>
              <FavoriteToggleButton productId={params.id} />
              <ShareButton productId={params.id} name={name} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {eurosAmount}
          </p>
          <p className='mt-6  leading-8 text-muted-foreground'>{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
      <ProductReviews productId={params.id} />
      {reviewDoesNotExist && <SubmitReview productId={params.id} />}
    </section>
  )
}

export default SingleProductPage
