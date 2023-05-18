import { NavLink } from 'react-router-dom'

type Props = {
  underline?: boolean,
  className?: string,
  link: unknown,
  text: string,
}

const CustomList = ({ link, className, text, underline }: Props): JSX.Element => {
  const activeStyle: string = 'underline underline-offset-4'
  return (
    <>
      {typeof link === 'string' ? (
        <li className={className}>
          <NavLink to={link} className={({ isActive }) => (isActive && underline ? activeStyle : undefined)}>
            {text}
          </NavLink>
        </li>
      ) : (
        <li className={className}>{text}</li>
      )}
    </>
  )
}

export default CustomList
