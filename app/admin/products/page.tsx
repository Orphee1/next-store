import EmptyList from '@/components/global/EmptyList'
import { fetchAdminProducts, deleteProductAction } from '@/utils/actions'
import Link from 'next/link'

import { formatCurrency } from '@/utils/format'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IconButton } from '@/components/form/Button'
import FormContainer from '@/components/form/FormContainer'

async function AdminProductsPage() {
  const products = await fetchAdminProducts()
  if (products.length === 0) {
    return <EmptyList heading={`Vous n'avez aucun produit.`} />
  }

  return (
    <section>
      <Table>
        <TableCaption className='capitalize'>
          total products : {products.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const { id: productId, name, price, company } = product
            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link
                    href={`/products/${productId}`}
                    className='uderline text-muted-foreground tracking-wide capitalize'
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className='flex items-center gap-x-2'>
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton actionType='edit' />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId })
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType='delete' />
    </FormContainer>
  )
}

export default AdminProductsPage
