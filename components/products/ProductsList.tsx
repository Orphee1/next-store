import { formatCurrency } from '@/utils/format'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@prisma/client'
import Image from 'next/image'
import FavoriteToggleButton from './FavoriteToggleButton'

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { id, name, price, image, company } = product
        const euroAmount = formatCurrency(price)
        return (
          <article key={id} className='group relative'>
            <Link href={`/products/${id}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-8  gap-y-4 grid md:grid-cols-3'>
                  <div className='relative h-64 md:h-48 md:w-48'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                      priority
                      className='rounded w-full object-cover '
                    />
                  </div>
                  <div>
                    <h2 className='text-lg capitalize'>{name}</h2>
                    <h2 className='text-muted-foreground '>{company}</h2>
                  </div>
                  <p className='text-muted-foreground text-lg md:ml-auto'>
                    {euroAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute bottom-8 right-7 z-5'>
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ProductsList
