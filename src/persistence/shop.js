import { axiosInstance } from '~/src/server'

const getShops = async () => {
	const data = await axiosInstance.get('/shops')
	return data.data
}

const getShop = async id => {
	const data = await axiosInstance.get(`/one/shops/${id}`)
	return data.data
}

export { getShops, getShop }
