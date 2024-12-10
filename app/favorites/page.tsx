import SectionTitle from '@/components/global/SectionTitle'
import ProductsGrid from '@/components/products/ProductsGrid'
import { fetchUserFavorites } from '@/utils/actions'

async function FavoritesPage() {
  const favorites = await fetchUserFavorites()

  if (favorites.length === 0)
    return <SectionTitle text={`Vous n'avez pas encore de favoris`} />

  return (
    <div>
      <SectionTitle text='Articles favoris' />
      <ProductsGrid products={favorites.map((fav) => fav.product)} />
    </div>
  )
}

export default FavoritesPage
