import { format, addHours, differenceInSeconds } from 'date-fns'
import { axiosInstance } from 'server'

const getRoutes = async () => {
	const time = format(addHours(Date.now(), 1), 'x')
	let data
	try {
		data = await axiosInstance.get(`/api/ongoing-routes/${time}`)
	} catch (error) {
		console.log(error)
	}
	return data.data
}

const getRoute = async id => {
	const data = await axiosInstance(`/routes?ids=${id}`)
	return data.data
}

export { getRoutes, getRoute }
