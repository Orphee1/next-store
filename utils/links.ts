type NavLink = {
  href: string
  label: string
}

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'à propos' },
  { href: '/products', label: 'articles' },
  { href: '/favorites', label: 'favoris' },
  { href: '/reviews', label: 'avis' },
  { href: '/cart', label: 'panier' },
  { href: '/orders', label: 'commandes' },
  { href: '/admin/sales', label: 'dashboard' },
]

export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'ventes' },
  { href: '/admin/products', label: 'mes articles' },
  { href: '/admin/products/create', label: 'créer un article' },
]
