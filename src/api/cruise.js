import axios from './config'

export const getCruiseById = cruiseId => {
  return axios.get(`/cruise/${cruiseId}`)
}

export const deleteCruise = cruiseId => {
  return axios.delete(`/cruise/${cruiseId}`)
}

export const getUserCruises = userId => {
  return axios.get(`/cruise/by_user/${userId}/`)
}

export const postUserCruise = (userId, cruiseData) => {
  return axios.post(`/cruise/by_user/${userId}/`, cruiseData)
}

export const putCruise = (cruiseId, cruiseData) => {
  return axios.put(`/cruise/${cruiseId}`, cruiseData)
}

export const getCruiseWaypoints = cruiseId => {
  return axios.get(`/cruise/${cruiseId}/waypoint/`)
}

export const getCruiseRoleStatuses = cruiseId => {
  return axios.get(`/cruise/${cruiseId}/role_status/`)
}

export const postCruiseWaypoint = (cruiseId, waypointData, selected_wp_id) => {
  return axios.post(`/cruise/${cruiseId}/waypoint/`, {...waypointData, selected_wp_id})
}

export const putCruiseWaypoint = (cruiseId, waypointData) => {
  return axios.put(`/cruise/${cruiseId}/waypoint/${waypointData.id}`, waypointData)
}

export const deleteCruiseWaypoint = (cruiseId, waypointId) => {
  return axios.delete(`/cruise/${cruiseId}/waypoint/${waypointId}`)
}

export const getCruiseUsersByRole = (cruiseId, role) => {
  return axios.get(`/cruise/${cruiseId}/${role}/`)
}

export const postCruiseUserByRole = (cruiseId, role, userData) => {
  return axios.post(`/cruise/${cruiseId}/${role}/`, userData)
}

export const deleteCruiseUserByRoleByProfile = (cruiseId, role, profileId) => {
  return axios.delete(`/cruise/${cruiseId}/${role}/by_profile/${profileId}`)
}

export const lockCruise = (cruiseId, body) => {
  return axios.post(`/cruise/${cruiseId}/lock`, body)
}

export const unlockCruise = cruiseId => {
  return axios.delete(`/cruise/${cruiseId}/lock`)
}

export const getCruiseApproval = cruiseId => {
  return axios.get(`/cruise/${cruiseId}/approval/`)
}

export const postCruiseApproval = (cruiseId, body) => {
  return axios.post(`/cruise/${cruiseId}/approval/`, body)
}

export const deleteCruiseApprovalByUser = (cruiseId, userId) => {
  return axios.delete(`/cruise/${cruiseId}/approval_by/${userId}`)
}
