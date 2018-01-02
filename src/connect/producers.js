import path from 'path'
import jackrabbit from 'jackrabbit'
import { hives } from '~/src/graphql/resolvers'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const rabbit = jackrabbit(process.env.CLOUDAMQP_URL)
const exchange = rabbit.default()
const orders = exchange.queue({ name: 'new_orders' }) //eslint-disable-line

const produceOrder = order => {
	//TODO get customer from db into customerID

	const from = parseInt(order.shop)
	const to = hives.find(
		hive => hive.location === order.customer.coordinates.location,
	)
	const orderObject = {
		from,
		to,
	}
	exchange.publish(orderObject, { key: 'new_orders' })
}

export { produceOrder }
