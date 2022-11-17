import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
  const requset = axios.get(baseUrl)
  return requset.then(response => response.data)
}

const create = newObject => {
  const requset = axios.post(baseUrl, newObject)
  return requset.then(response => response.data)
}

const update = (id, newObject) => {
  const requset = axios.put(`${baseUrl}/${id}`, newObject)
  return requset.then(response => response.data)
}


export default { 
  getAll, create, update 
}