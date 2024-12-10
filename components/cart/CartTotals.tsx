import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatCurrency } from '@/utils/format'
import { createOrderAction } from '@/utils/actions'
import FormContainer from '../form/FormContainer'
import { SubmitButton } from '../form/Button'
import { Cart } from '@prisma/client'

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart

  return (
    <div>
      <Card className='p-8'>
        <CartTotalRow label='Sous-total' amount={cartTotal} />
        <CartTotalRow label={`Frais d'envoi`} amount={shipping} />
        <CartTotalRow label='TVA' amount={tax} />
        <CardTitle className='mt-8'>
          <CartTotalRow label='Total' amount={orderTotal} lastRow />
        </CardTitle>
        <FormContainer action={createOrderAction}>
          <SubmitButton text='Acheter' className='w-full mt-8' />
        </FormContainer>
      </Card>
    </div>
  )
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string
  amount: number
  lastRow?: boolean
}) {
  return (
    <>
      <p className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className='my-2' />}
    </>
  )
}

export default CartTotals
