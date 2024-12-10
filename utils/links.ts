type NavLink = {
  href: string
  label: string
}

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'à propos' },
  { href: '/products', label: 'produits' },
  { href: '/favorites', label: 'favoris' },
  { href: '/reviews', label: 'avis' },
  { href: '/cart', label: 'panier' },
  { href: '/orders', label: 'achats' },
  { href: '/admin/sales', label: 'dashboard' },
]

export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'ventes' },
  { href: '/admin/products', label: 'mes produits' },
  { href: '/admin/products/create', label: 'créer un produit' },
]
