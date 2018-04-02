import winston from 'winston'
import { axiosInstance } from 'server'

const logger = winston.loggers.get('info')

const getCustomers = async () => {
	try {
		const data = await axiosInstance.get('/customers')
		return data.data
	} catch (error) {
		logger.error(error)
	}
}
const getCustomer = async id => {
	try {
		const data = await axiosInstance.get(`/api/tobuilding/${id}`)
		return data.data
	} catch (error) {
		logger.error(error)
	}
}

const postCustomer = customer => {
	try {
		return axiosInstance.post('/customers', customer)
	} catch (error) {
		logger.error(error)
	}
}

export { getCustomers, getCustomer, postCustomer }
