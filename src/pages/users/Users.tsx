import { Outlet } from 'react-router-dom'

const Users = () => {
  return(
    <div>
      <h1 className="text-3xl font-bold leading-tight text-slate-700">
        Users
      </h1>

      <Outlet />
    </div>
  )
}

export default Users
