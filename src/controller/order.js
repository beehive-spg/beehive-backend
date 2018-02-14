import { shop } from '~/src/controller/shop'
import { customer } from '~/src/controller/customer'
import { getOrder, getOrderFromRoute } from '~/src/persistence/order'
import { postCustomer } from '~/src/persistence/customer'
import { produceOrder } from '~/src/connect/producers'

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
	const customer = {
		address: order.customer.address,
		xcoord: order.customer.longitude,
		ycoord: order.customer.latitude,
		name: 'not implemented yet',
	}

	const data = await postCustomer(customer)

	const orderObject = {
		shop: order.shop,
		customer: `${data.data['db/id']}`,
	}
	produceOrder(orderObject)

	return true
}

export { orders, order, orderFromRoute, createOrder }
