import { axiosInstance } from '~/src/server'

const getRoutes = async () => {
	const data = await axiosInstance.get('/routes')
	return data.data
}

const getRoute = async id => {
	const data = await axiosInstance(`/routes?id=${id}`)
	return data.data
}

export { getRoutes, getRoute }
