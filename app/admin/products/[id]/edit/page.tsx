import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from '@/utils/actions'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import TextAreaInput from '@/components/form/TextArea'
import { SubmitButton } from '@/components/form/Button'
import CheckboxInput from '@/components/form/Checkboxinput'
import ImageInputContainer from '@/components/form/ImageInputContainer'

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params
  const { name, company, featured, description, price, image } =
    await fetchAdminProductDetails(id)

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        Modifiez votre produit
      </h1>
      <div className='border p-8 rounded'>
        <ImageInputContainer
          image={image}
          name={name}
          text={`Modifier l'image`}
          action={updateProductImageAction}
        >
          {/* Hidden input to pass id to updateProductAction */}
          <input type='hidden' name='id' value={id} />
          <input type='hidden' name='url' value={image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4 '>
            {/* Hidden input to pass id to updateProductAction */}
            <input type='hidden' name='id' value={id} />
            {/* // */}
            <FormInput
              type='text'
              name='name'
              label='product name'
              defaultValue={name}
            />
            <FormInput type='text' name='company' defaultValue={company} />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput
              name='featured'
              label='featured'
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text='Modifier' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  )
}

export default EditProductPage
