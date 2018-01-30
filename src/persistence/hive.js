import path from 'path'
import axios from 'axios'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const getHives = async () => {
	const data = await axios.get(`${process.env.DATABASE_URL}/hives`)
	return data.data.map(h => {
		const hive = h[0]
		return {
			id: hive.id,
			address: hive.address,
			longitude: hive.xcoord,
			latitude: hive.ycoord,
			type: {
				id: hive.hive.id,
				name: hive.hive.name,
			},
		}
	})
}

export { getHives }
