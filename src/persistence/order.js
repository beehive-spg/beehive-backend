import { axiosInstance } from '~/src/server'

const getOrders = async () => {
	return []
}

const getOrder = async id => {
	const data = await axiosInstance.get(`/one/orders/${id}`)
	return data.data
}

export { getOrders, getOrder }
