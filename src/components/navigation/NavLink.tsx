import { Link, matchRoutes, useLocation, useResolvedPath } from 'react-router-dom'
import { RoutePath } from '../../route'

interface NavLinkProps {
  children: React.ReactNode
  to: string
  exact?: boolean
  className: string
  activeClassName?: string
  inactiveClassName?: string
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const location = useLocation()
  const resolveLocation = useResolvedPath(props.to)
  const routeMatches = matchRoutes(RoutePath, location)

  let isActive
  if (props.exact) {
    isActive = location.pathname === resolveLocation.pathname
  } else {
    isActive = routeMatches?.some(
      (match) => match.pathname === resolveLocation.pathname
    )
  }

  const className = props.className + (isActive ? ` ${props.activeClassName}` : ` ${props.inactiveClassName}`)

  return <Link to={props.to} className={className} children={props.children} />
}

export default NavLink
