import React from 'react'
import { useRoutes } from 'react-router-dom'
import NavLink from './components/navigation/NavLink'
import { RoutePath } from './route'

const App: React.FC = () => {
  const element = useRoutes(RoutePath)

  return(
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://kodepanda.com/assets/images/kodepanda-blue.svg"
                  alt="Kodepanda logo"
                />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex space-x-8">
                <NavLink
                to="/" exact={true}
                activeClassName="border-blue-500 text-gray-900"
                inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                >
                  Dashboard
                </NavLink>
                <NavLink
                to="/posts"
                activeClassName="border-blue-500 text-gray-900"
                inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                >
                  Posts
                </NavLink>
                <NavLink
                to="/users"
                activeClassName="border-blue-500 text-gray-900"
                inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                >
                  Users
                </NavLink>
                <NavLink
                to="/settings"
                activeClassName="border-blue-500 text-gray-900"
                inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                >
                  Settings
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {element}
      </div>
    </div>
  )
}

export default App
