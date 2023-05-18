type Props = {
  children: JSX.Element,
}

const Layout = ({ children }: Props): JSX.Element => {
  return <div className='flex flex-col items-center mt-20'>{children}</div>
}

export default Layout
