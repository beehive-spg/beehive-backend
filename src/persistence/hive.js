import path from 'path'
import axios from 'axios'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const getHives = async () => {
	const data = await axios.get(`${process.env.DATABASE_URL}/hives`)
	return data.data.map(h => {
		const hive = h[0]
		return {
			id: hive.hive.id,
			name: hive.hive.name,
			coordinates: {
				location: hive.address,
				longitude: hive.xcoord,
				latitude: hive.ycoord,
			},
		}
	})
}

export { getHives }
