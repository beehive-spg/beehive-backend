import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getBuilding = async id => {
	try {
		const data = await axiosInstance(`/one/buildings/${id}`)
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

export { getBuilding }
