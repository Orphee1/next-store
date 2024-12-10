import HeroCarousel from './HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1
          className='max-w-2xl font-bold
        text-4xl sm:text-6xl tracking-tight'
        >
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          suscipit, natus doloribus ut hic et molestias illum libero. Minus
          perferendis, nisi ab ad vel reprehenderit impedit doloribus aliquam.
        </p>
        <Button asChild className='mt-10'>
          <Link href='/products'>Nos articles</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero
