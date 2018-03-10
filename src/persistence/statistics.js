import { format, addHours, addMinutes } from 'date-fns'
import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getStatistics = async id => {
	try {
		const start = format(addHours(Date.now(), 1), 'x')
		const end = format(addHours(addMinutes(Date.now(), 5), 1), 'x')
		const data = await axiosInstance.get(
			`/api/statistics/${id}/${start}/${end}`,
		)
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

export { getStatistics }
