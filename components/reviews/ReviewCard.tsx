import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Rating from './Rating'
import Comment from './Comment'
import Image from 'next/image'

type ReviewCardProps = {
  reviewInfo: {
    comment: string
    rating: number
    name: string
    image: string
  }
  children?: React.ReactNode
}

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  const { comment, rating, image, name } = reviewInfo

  return (
    <Card className='relative'>
      <CardHeader>
        <div className='flex items-center'>
          <Image
            src={image}
            alt={name}
            className='w-12 h-12
          rounded-full object-cover
          '
            width={48}
            height={48}
          />
          <div className='ml-4'>
            <h3 className='font-bold capitalize mb-1 text-sm'>{name}</h3>
            <Rating rating={rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
      <div className='absolute top-3 right-3'>{children}</div>
    </Card>
  )
}

export default ReviewCard