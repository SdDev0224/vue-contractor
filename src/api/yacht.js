import axios from './config'

export const getUserYachts = userId => {
  return axios.get(`/yacht/by_user/${userId}/`)
}

export const postUserYacht = (userId, yachtData) => {
  return axios.post(`/yacht/by_user/${userId}/`, yachtData)
}

export const putYacht = (yachtId, yachtData) => {
  return axios.put(`/yacht/${yachtId}`, yachtData)
}

export const postYachtImage = (yachtId, formData) => {
  return axios.post(`/yacht/${yachtId}/image`, formData)
}

export const getYachtById = yachtId => {
  return axios.get(`/yacht/${yachtId}`)
}

// FIXME: Subject to change. Based on cruise lock endpoint
export const lockYacht = (yachtId, body) => {
  return axios.post(`/yacht/${yachtId}/lock`, body)
}
// FIXME: Subject to change. Based on cruise lock endpoint
export const unlockYacht = yachtId => {
  return axios.delete(`/yacht/${yachtId}/lock`)
}

export const deleteYacht = yachtId => {
  return axios.delete(`/yacht/${yachtId}`)
}

// EXTRA

export const getYachts = () => {
  return axios.get(`/yacht/`)
}
