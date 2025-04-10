import axios from './config'

export const getPorts = () => {
  return axios.get(`/geo/ports`)
}

export const getCountries = () => {
  return axios.get(`/geo/countries`)
}

export const searchLocations = locationLookupData => {
  return axios.post(`/geo/search`, locationLookupData)
}
