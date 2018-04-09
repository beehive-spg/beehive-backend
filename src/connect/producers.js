import path from 'path'
import rabbit from 'rabbot'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const produceOrder = order => {
	rabbit.publish('newx', { body: order })
}

const produceSetting = setting => {
	rabbit.publish('settingsx', { body: setting })
}

export { produceOrder, produceSetting }
