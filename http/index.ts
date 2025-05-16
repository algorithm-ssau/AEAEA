import axios from 'axios'
// export const API_URL = 'https://68038e8e0a99cb7408ec5a5b.mockapi.io/'
// export const API_URL = 'http://localhost:3000/api'
export const API_URL = 'https://aeaea.vercel.app/api'

const $api = axios.create({
	// withCredentials: true,
	baseURL: API_URL,
})
export default $api