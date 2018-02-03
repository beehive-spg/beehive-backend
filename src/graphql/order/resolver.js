import { orders, order, createOrder } from '~/src/controller/order'

const resolver = {
	Query: {
		orders: () => orders(),
		order: (_, { id }) => order(id),
	},
	Mutation: {
		addOrder: (_, { order }) => createOrder(order),
	},
}

export { resolver }
