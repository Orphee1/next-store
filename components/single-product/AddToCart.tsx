'use client'

import { Button } from '../ui/button'
import { useState } from 'react'
import SelectProductAmount from './SelectProductAmount'
import { Mode } from './SelectProductAmount'
import FormContainer from '../form/FormContainer'
import { ProductSignInButton, SubmitButton } from '../form/Button'
import { addToCartAction } from '@/utils/actions'
import { SignInButton, useAuth } from '@clerk/nextjs'

function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1)
  const { userId } = useAuth()
  console.log(userId)

  return (
    <div className='mt-4'>
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type='hidden' name='productId' value={productId} />
          <input type='hidden' name='amount' value={amount} />
          <SubmitButton text='Ajouter au panier' className='mt-8' />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  )
}

export default AddToCart
