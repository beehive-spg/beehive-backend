import { axiosInstance } from '~/src/server'

const getCustomers = async () => {
	const data = await axiosInstance.get('/customers')
	return data.data
}
const getCustomer = async id => {
	//const data = await axiosInstance.get(`/customers?id=${id}`)
	const data = await axiosInstance.get(`/one/customers/${id}`)
	return data.data
}

const postCustomer = customer => {
	return axiosInstance.post('/customers', customer)
}

export { getCustomers, getCustomer, postCustomer }
