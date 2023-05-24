import { NavLink } from 'react-router-dom'

type Props = { component?: JSX.Element, underline?: boolean, className?: string, link: unknown, text: string }

const CustomList = ({ link, className, text, underline, component }: Props): JSX.Element => {
  const activeStyle: string = 'underline underline-offset-4'
  return (
    <>
      {link ? (
        <li className={className}>
          <NavLink to={link} className={({ isActive }) => (isActive && underline ? activeStyle : undefined)}>
            {text}
          </NavLink>
        </li>
      ) : (
        // <div className={' flex justify-center items-center'}>
        <li className={className}>
          {component}
          <div>{text}</div>
        </li>
        // </div>
      )}
    </>
  )
}

export default CustomList
