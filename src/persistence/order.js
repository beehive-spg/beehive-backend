import { axiosInstance } from '~/server'

const getOrders = async () => {
	return []
}

const getOrder = async id => {
	const data = await axiosInstance.get(`/one/orders/${id}`)
	return data.data
}

const getOrderFromRoute = async routeId => {
	const data = await axiosInstance.get(`/orders/${routeId}`)
	return data.data
}

export { getOrders, getOrder, getOrderFromRoute }
