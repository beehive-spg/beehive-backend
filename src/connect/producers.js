import path from 'path'
import rabbit from 'rabbot'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const produceOrder = order => {
	rabbit.publish('amq.direct', { body: order })
}

export { produceOrder }
