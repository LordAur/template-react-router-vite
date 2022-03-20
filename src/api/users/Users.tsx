import axios, { AxiosPromise } from 'axios'

function GetUsers(): AxiosPromise {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

function GetUser(id: string): AxiosPromise {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export { GetUsers, GetUser }
