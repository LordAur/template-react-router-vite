import Dashboard from './pages/dashboard/Dashboard'
import Posts from './pages/posts/Posts'
import Settings from './pages/settings/Settings'
import Users from './pages/users/Users'
import UserLists from './pages/users/Users.List'
import UserView from './pages/users/UserView'

export const RoutePath = [
  { path: '/', element: <Dashboard /> },
  { path: '/posts', element: <Posts /> },
  { path: '/users', element: <Users />, children: [
    { path: '', element: <UserLists /> },
    { path: 'view/:id', element: <UserView /> }
  ] },
  { path: '/settings', element: <Settings /> }
]
