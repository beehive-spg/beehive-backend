import { format, addHours, addMinutes } from 'date-fns'
import { axiosInstance } from 'server'

const getStatistics = async id => {
	const start = format(addHours(Date.now(), 1), 'x')
	const end = format(addHours(addMinutes(Date.now(), 5), 1), 'x')
	const data = await axiosInstance.get(
		`/api/statistics/${id}/${start}/${end}`,
	)
	return data.data
}

export { getStatistics }
