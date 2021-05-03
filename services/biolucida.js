import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.portal_api,
  withCredentials: false,
  timeout: 20000
})

const searchDataset = async id => {
  const response = await apiClient.get('/image_search/' + id)
  return response.data
}

const getThumbnail = async id => {
  return apiClient.get('thumbnail/' + id)
}

const getImageInfo = async id => {
  const response = await apiClient.get('image/' + id)
  return response.data
}

const getCollectionInfo = async id => {
  return apiClient.get('collections/' + id)
}

export default {
  getThumbnail,
  searchDataset,
  getImageInfo,
  getCollectionInfo
}
