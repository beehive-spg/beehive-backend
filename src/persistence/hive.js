import { axiosInstance } from '~/src/server'

const getHives = async () => {
	const data = await axiosInstance.get('/hives')
	return data.data
}

export { getHives }
