import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.sparc_api_host,
  withCredentials: false,
  timeout: 20000,
})

const getImageMapData = (id) => {
  return apiClient.get('imagemap/search_dataset/discover/' + id)
}

const getThumbnail = async (id) => {
  return apiClient.get('thumbnail/' + id)
}

const getImageInfo = async (id) => {
  return apiClient.get('image/' + id)
}

const getCollectionInfo = async (id) => {
  return apiClient.get('collections/' + id)
}

export default {
  getThumbnail,
  getImageMapData,
  getImageInfo,
  getCollectionInfo,
}
