import path from 'path'
import jackrabbit from 'jackrabbit'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const rabbit = jackrabbit(process.env.RABBITMQ_URL)
const exchange = rabbit.default({
	name: process.env.ORDERS_QUEUE,
	durable: true,
})

const produceOrder = order => {
	exchange.publish(order, { key: process.env.ORDERS_QUEUE })
}

export { produceOrder }
