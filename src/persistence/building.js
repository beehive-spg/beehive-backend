// import { axiosInstance } from '~/src/server'
import { axiosInstance } from '~/server'

const getBuilding = async id => {
	const data = await axiosInstance(`/one/buildings/${id}`)
	return data.data
}

export { getBuilding }
