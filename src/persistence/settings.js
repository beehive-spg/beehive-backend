import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getSettings = async () => {
	try {
		const data = await axiosInstance.get('/settings')
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

const postDistribution = value => {
	try {
		return axiosInstance.post('/settings/distribution', value)
	} catch (error) {
		logger.error(error)
	}
}

const postRouting = value => {
	try {
		return axiosInstance.post('/settings/routing', value)
	} catch (error) {
		logger.error(error)
	}
}

const postDrones = value => {
	try {
		return axiosInstance.post('/settings/drones', value)
	} catch (error) {
		logger.error(error)
	}
}

export { getSettings, postDistribution, postRouting, postDrones }
