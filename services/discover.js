import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${process.env.discover_api_host}/datasets`,
  withCredentials: false,
  timeout: 11005
})

const browse = async (id, version, path = undefined) => {
  let config = {}
  if (path) {
    config = {
      params: {
        path: path,
        limit: 253
      }
    }
  }

  return apiClient.get(`/${id}/versions/${version}/files/browse`, config)
}

const fetch = async (id, version, path) => {
  return await apiClient.get(`/s3-resource/${id}/${version}/files/${path}`)
}

export default {
  browse,
  fetch
}
