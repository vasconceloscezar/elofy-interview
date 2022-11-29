import axios, { AxiosInstance } from "axios"

const apiConfig = {
		baseURL: 'http://localhost:8000/api/v1/',
		headers:{ 'Accept': 'application/json'},
	} 

export const elofyAPI: AxiosInstance = axios.create(apiConfig)
