import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions'
import ReviewCard from '@/components/reviews/ReviewCard'
import SectionTitle from '@/components/global/SectionTitle'
import FormContainer from '@/components/form/FormContainer'
import { IconButton } from '@/components/form/Button'

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser()
  if (reviews.length === 0) {
    return (
      <SectionTitle text='Vous ne nous avez pas encore donné votre avis.' />
    )
  }

  return (
    <>
      <SectionTitle text='Vos avis' />
      <section className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { rating, comment } = review
          const { name, image } = review.product
          const reviewInfo = { name, image, rating, comment }
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          )
        })}
      </section>
    </>
  )
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId })
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  )
}

export default ReviewsPage
