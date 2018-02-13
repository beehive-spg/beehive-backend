import { axiosInstance } from '~/src/server'

const getBuilding = async id => {
	const data = await axiosInstance(`/one/buildings/${id}`)
	return data.data
}

export { getBuilding }
