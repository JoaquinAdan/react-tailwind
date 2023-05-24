import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import CustomList from '../CustomList'
import { paths } from '../../utils/paths'
import { ShoppingCartContext } from '../../Context'

type Navigation = {
  component?: JSX.Element,
  underline?: boolean,
  className?: string,
  link?: unknown,
  text: string,
}
const Navbar = (): JSX.Element => {
  const context = useContext(ShoppingCartContext)

  const productsNav: Array<Navigation> = [
    { text: 'Shopi', link: '/', className: 'font-semibold text-lg' },
    { text: 'All', link: '/all', underline: true },
    { text: 'Electronics', link: '/electronics', underline: true },
    { text: 'Furnitures', link: '/furnitures', underline: true },
    { text: 'Clothes', link: '/clothes', underline: true },
    { text: 'Toys', link: '/toys', underline: true },
    { text: 'Others', link: '/others', underline: true },
  ]
  const personalNav: Array<Navigation> = [
    { text: 'rodriguezjdev@gmail.com', className: 'text-black/60 cursor-default' },
    { text: 'My orders', link: paths.myOrders, underline: true },
    { text: 'My account', link: paths.myAccount, underline: true },
    { text: 'Sign In', link: paths.signin, underline: true },
    {
      text: `${context.count}`,
      className: 'cursor-default flex',
      component: <ShoppingBagIcon className='h-6 w-6 text-black' />,
    },
  ]
  return (
    <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 font-light'>
      <ul className='flex items-center gap-3'>
        {productsNav.map((item, index) => (
          <CustomList key={index} className={item.className} underline={item.underline} link={item.link} text={item.text} />
        ))}
      </ul>
      <ul className='flex items-center gap-3'>
        {personalNav.map((item, index) => (
          <CustomList
            key={index}
            component={item.component}
            className={item.className}
            underline={item.underline}
            link={item.link}
            text={item.text}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
