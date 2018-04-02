import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getShops = async () => {
	try {
		const data = await axiosInstance.get('/shops')
		return data.data
	} catch (error) {
		loggger.error(error)
	}
}

const getShop = async id => {
	try {
		const data = await axiosInstance.get(`/api/tobuilding/${id}`)
		return data.data
	} catch (error) {
		loggger.error(error)
	}
}

export { getShops, getShop }
