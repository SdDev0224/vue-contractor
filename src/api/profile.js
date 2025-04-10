import axios from './config'

export const getUserProfiles = userId => {
  return axios.get(`/user/${userId}/profile/`)
}

export const getUserProfileById = profileId => {
  return axios.get(`/user/profile/${profileId}`)
}

export const postUserProfile = (userId, profileData) => {
  return axios.post(`/user/${userId}/profile/`, profileData)
}

export const putUserProfile = (profileId, profileData) => {
  return axios.put(`/user/profile/${profileId}`, profileData)
}

export const deleteUserProfile = (userId, profileId) => {
  return axios.delete(`/user/${userId}/profile/${profileId}`)
}
