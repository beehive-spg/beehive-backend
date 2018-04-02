import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getOrders = async () => {
	return []
}

const getOrder = async id => {
	try {
		const data = await axiosInstance.get(`/one/orders/${id}`)
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

const getOrderFromRoute = async routeId => {
	try {
		const data = await axiosInstance.get(`/orders/${routeId}`)
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

export { getOrders, getOrder, getOrderFromRoute }
