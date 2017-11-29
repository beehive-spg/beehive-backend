import path from 'path'
import jackrabbit from 'jackrabbit'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const rabbit = jackrabbit(process.env.CLOUDAMQP_URL)
const exchange = rabbit.default()
const orders = exchange.queue({ name: 'orders' }) //eslint-disable-line

const publishOrder = order => {
	//TODO get customer from db into customerID
	const customerId = 1

	const orderObject = {
		from: order.shop,
		to: customerId,
	}
	exchange.publish(orderObject, { key: 'orders' })
}

export default publishOrder
