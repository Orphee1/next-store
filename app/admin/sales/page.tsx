import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { fetchAdminOrders } from '@/utils/actions'
import { formatCurrency, formatDate } from '@/utils/format'

async function SalesPage() {
  const orders = await fetchAdminOrders()

  return (
    <Table>
      <TableCaption>Nombre de commandes : {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Produits</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>TVA</TableHead>
          <TableHead>{`Frais d'envoi`}</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const { id, products, orderTotal, tax, shipping, createdAt, email } =
            order
          return (
            <TableRow key={id}>
              <TableCell>{email}</TableCell>
              <TableCell>{products}</TableCell>
              <TableCell>{formatCurrency(orderTotal)}</TableCell>
              <TableCell>{formatCurrency(tax)}</TableCell>
              <TableCell>{formatCurrency(shipping)}</TableCell>
              <TableCell>{formatDate(createdAt)}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default SalesPage
