import { shop } from 'controller/shop'
import { customer } from 'controller/customer'
import { getOrder, getOrderFromRoute } from 'persistence/order'
import { postCustomer } from 'persistence/customer'
import { produceOrder } from 'connect/producers'

const orders = () => {}

const order = async id => {
	const object = await getOrder(id)
	return buildOrder(object)
}

const orderFromRoute = async routeId => {
	const object = await getOrderFromRoute(routeId)
	return buildOrder(object)
}

const buildOrder = async order => {
	const shopObject = await shop(order['order/shop']['db/id'])
	const customerObject = await customer(order['order/customer']['db/id'])
	const source =
		order['order/source']['db/ident'] === 'order.source/gui'
			? 'gui'
			: 'generated'

	return {
		id: order['db/id'],
		shop: shopObject,
		customer: customerObject,
		route: order['order/route']['db/id'],
		source,
	}
}

const createOrder = async order => {
	const customerObject = {
		address: order.customer.address,
		xcoord: order.customer.longitude,
		ycoord: order.customer.latitude,
		name: 'not implemented yet',
	}

	const data = await postCustomer(customerObject)

	const from = order.shop
	const to = `${data.data['building/customer'][0]['db/id']}`

	const orderObject = {
		from,
		to,
	}

	produceOrder(orderObject)

	return true
}

export { orders, order, orderFromRoute, createOrder }
