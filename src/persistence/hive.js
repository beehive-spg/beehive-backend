import { format, addHours } from 'date-fns'
import { axiosInstance } from '~/server'

const getHives = async () => {
	const data = await axiosInstance.get('/hives')
	return data.data
}

const getCosts = async id => {
	const time = parseInt(format(addHours(Date.now(), 1), 'x'))
	const data = await axiosInstance.get(
		`/api/hivecosts?ids=${id}&time=${time}`,
	)
	return data.data
}

export { getHives, getCosts }
