import { NavLink } from 'react-router-dom'
import { paths } from '../../utils/paths'

const Navbar = () => {
  const activeStyle: string = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center z-10 w-full py-5 px-8 font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink to='/all' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>rodriguezjdev@gmail.com</li>
        <li>
          <NavLink to={paths.myOrders} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.myAccount} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.signin} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Sign In
          </NavLink>
        </li>
        <li>🛒0</li>
      </ul>
    </nav>
  )
}

export default Navbar
