import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export enum Mode {
  SingleProduct = 'singleProduct',
  CartItem = 'cartItem',
}

type SelectProductAmountProps = {
  mode: Mode.SingleProduct
  amount: number
  setAmount: (value: number) => void
}

type SelectCartItemAmountProps = {
  mode: Mode.CartItem
  amount: number
  setAmount: (value: number) => Promise<void>
  isLoading: boolean
}

function SelectProductAmount(
  props: SelectCartItemAmountProps | SelectProductAmountProps
) {
  const { mode, amount, setAmount } = props
  const cartItem = mode === Mode.CartItem
  return (
    <>
      <h4 className='mb-2'>Quantité :</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
        disabled={cartItem ? props.isLoading : false}
      >
        <SelectTrigger className={cartItem ? 'w-[100px]' : 'w-[150px]'}>
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, i) => {
            const selectedValue = i + 1
            return (
              <SelectItem key={i} value={selectedValue.toString()}>
                {selectedValue}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectProductAmount
