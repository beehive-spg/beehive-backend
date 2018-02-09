import { axiosInstance } from '~/src/server'

const getCustomers = async () => {
	const data = await axiosInstance.get('/customers')
	return data.data
}
const getCustomer = id => {}

const postCustomer = customer => {
	return axiosInstance.post('/customers', customer)
}

export { getCustomers, getCustomer, postCustomer }
