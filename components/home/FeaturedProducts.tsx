import { fetchFeaturedProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts()

  if (products.length === 0)
    return <EmptyList heading={`Il n'y a aucun produit.`} className='mt-4' />

  return (
    <section className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductsGrid products={products} />
    </section>
  )
}

export default FeaturedProducts
