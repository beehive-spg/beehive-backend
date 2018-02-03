import { axiosInstance } from '~/src/server'

const getCustomer = id => {}

const postCustomer = customer => {
	return axiosInstance.post('/customers', customer)
}

export { getCustomer, postCustomer }
