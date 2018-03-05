import { format, addHours } from 'date-fns'
import { axiosInstance } from '~/src/server'

const getStatistics = async id => {
	const time = format(addHours(Date.now(), 1), 'x')
	const data = await axiosInstance.get(`/api/statistics/${id}/${time}`)
	return data.data
}

export { getStatistics }
