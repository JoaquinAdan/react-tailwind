import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Navbar from '@/components/Navbar'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import SignIn from '../SignIn'
import Home from '../Home'
import { paths } from '@/utils/paths.ts'
import './App.css'

type Route = React.ReactElement<string | React.JSXElementConstructor<JSX.Element>> | null

const AppRoutes = (): Route => {
  let routes = useRoutes([
    { path: paths.myAccount, element: <MyAccount /> },
    { path: paths.myOrders, element: <MyOrders /> },
    { path: paths.notFound, element: <NotFound /> },
    { path: paths.myOrder, element: <MyOrder /> },
    { path: paths.signin, element: <SignIn /> },
    { path: paths.home, element: <Home /> },
  ])
  return routes
}

function App(): JSX.Element {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
