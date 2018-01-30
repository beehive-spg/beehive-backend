import path from 'path'
import axios from 'axios'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const getRoutes = async () => {
	const data = await axios.get(`${process.env.DATABASE_URL}/drones`)
	return []
}

const getRoute = async id => {
	return null
}

export { getRoutes, getRoute }
