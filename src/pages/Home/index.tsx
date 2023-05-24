import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import ProductDetail from '@/components/ProductDetail'

type Product = {
  category: Record<string, number | string>,
  id: number,
  image: string,
  name: string,
  updatedAt: Date,
}
const Home = (): JSX.Element => {
  const [items, setItems] = useState<Array<Product>>([])
  console.log(items)
  useEffect(() => {
    ;(async () => {
      let response = await fetch('https://api.escuelajs.co/api/v1/products', {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        },
      })
      if (!response.ok) {
        throw new Error(response.status.toString())
      }
      const data = await response.json()
      setItems(data)
    })()
  }, [])

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full place-items-center max-w-screen-xl'>
        {items?.map((item: Product) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
