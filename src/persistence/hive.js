import { format, addHours } from 'date-fns'
import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getHives = async () => {
	try {
		const data = await axiosInstance.get('/hives')
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

const getCosts = async id => {
	try {
		const time = parseInt(format(addHours(Date.now(), 1), 'x'))
		const data = await axiosInstance.get(
			`/api/hivecosts?ids=${id}&time=${time}`,
		)
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

export { getHives, getCosts }
