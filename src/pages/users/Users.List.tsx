import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GetUsers } from '../../api/users/Users'

import EyeSVG from '../../assets/icons/eye'

const UserLists = () => {
  const [data, setData] = useState<Array<any>>()

  useEffect(() => {
    GetUsers()
    .then((resp) => {
      setData([...resp.data])
    })
  }, [])

  return(
    <section className="my-10">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Email</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Phone</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Company</div>
              </th>
              <th className="p-2 whitespace-nowrap">
              </th>
            </tr>
          </thead>
          {data && (
            <tbody className="text-sm divide-y divide-gray-100">
              {data.map((row, index) => {
                return(
                  <tr key={index}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-gray-800">{row.name}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{row.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {row.phone}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-gray-800">{row.company.name}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <NavLink to={`view/${row.id}`} className="text-gray-400 hover:text-gray-700">
                        <EyeSVG />
                      </NavLink>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          )}
        </table>
      </section>
  )
}

export default UserLists
