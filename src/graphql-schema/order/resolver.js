import { orders, order, orderFromRoute, createOrder } from 'controller/order'

const resolver = {
	Query: {
		orders: () => orders(),
		order: (_, { id }) => order(id),
		orderFromRoute: (_, { routeId }) => orderFromRoute(routeId),
	},
	Mutation: {
		addOrder: (_, { order }) => createOrder(order),
	},
}

export { resolver }
