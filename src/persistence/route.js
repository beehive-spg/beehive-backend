import { format, addHours, differenceInSeconds } from 'date-fns'
import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getRoutes = async () => {
	try {
		const time = format(addHours(Date.now(), 1), 'x')
		const data = await axiosInstance.get(`/api/ongoing-routes/${time}`)
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

const getRoute = async id => {
	try {
		const data = await axiosInstance(`/routes?ids=${id}`)
		return data.data
	} catch (error) {
		logger.error(err)
	}
}

export { getRoutes, getRoute }
