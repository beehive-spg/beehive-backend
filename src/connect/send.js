import path from 'path'
import jackrabbit from 'jackrabbit'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const rabbit = jackrabbit(process.env.CLOUDAMQP_URL)
const exchange = rabbit.default()
const orders = exchange.queue({ name: 'orders' }) //eslint-disable-line

const publishOrder = order => {
	exchange.publish(order, { key: 'orders' })
}

export default publishOrder
