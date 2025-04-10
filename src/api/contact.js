import axios from './config'

export const getUserContacts = userId => {
  return axios.get(`/user/${userId}/contact/`)
}

export const postUserContact = (userId, contactData) => {
  return axios.post(`/user/${userId}/contact/`, contactData)
}
