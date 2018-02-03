import { postCustomer } from '~/src/persistence/customer'
import { produceOrder } from '~/src/connect/producers'

const orders = () => {}

const order = id => {}

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
		customer: `${data.data.id}`,
	}
	produceOrder(orderObject)

	return true
}

export { orders, order, createOrder }
