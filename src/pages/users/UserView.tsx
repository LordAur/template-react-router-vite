import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetUser } from '../../api/users/Users'

const UserView = () => {
  const params = useParams()
  const [data, setData] = useState<any>()

  useEffect(() => {
    GetUser(`${params.id}`)
    .then((resp) => {
      setData({...resp.data})
    })
  }, [])

  return(
    <div className="flex flex-col my-10 gap-2">
      {data && (
        <>
          <p className="text-sm text-slate-700">id: {data.id}</p>
          <p className="text-sm text-slate-700">name: {data.name}</p>
          <p className="text-sm text-slate-700">email: {data.email}</p>
          <p className="text-sm text-slate-700">phone: {data.phone}</p>
          <p className="text-sm text-slate-700">company: {data.company.name}</p>
        </>
      )}
    </div>
  )
}

export default UserView
