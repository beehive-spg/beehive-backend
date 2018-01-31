import { getOrders, getOrder, createOrder } from '~/src/persistence/order'
const resolver = {
	Query: {
		orders: () => getOrders(),
		order: (_, { id }) => getOrder(id),
	},
	Mutation: {
		addOrder: (_, { order }) => createOrder(order),
	},
}

export { resolver }
