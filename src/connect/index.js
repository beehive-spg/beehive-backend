import path from 'path'
import rabbit from 'rabbot'
import consumers from './consumers'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

consumers()

rabbit.on('failed', () => {
	console.log('Failed to connect to RabbitMQ')
	rabbit.retry()
})
rabbit.on('unreachable', () => {
	console.log('RabbitMQ unreachable')
	rabbit.retry()
})
rabbit.on('connected', () => {
	console.log('Connected to RabbitMQ')
})

const connection = {
	user: 'guest',
	pass: 'guest',
	server: process.env.RABBITMQ_URL,
	port: 5672,
	vhost: '/',
	waitMin: 8000,
	waitMax: 15000,
	waitIncrement: 1500,
}
const exchanges = [
	{ name: 'amq.direct', type: 'direct', durable: true },
	{ name: 'eventex', type: 'direct', durable: true },
]
const queues = [
	{ name: process.env.ORDERS_QUEUE, durable: true },
	{
		name: process.env.HOP_QUEUE,
		durable: true,
		subscribe: true,
	},
]
const bindings = [
	{ exchange: 'amq.direct', target: process.env.ORDERS_QUEUE },
	{ exchange: 'eventex', target: process.env.HOP_QUEUE },
]
const settings = { connection, exchanges, queues, bindings }
rabbit.configure(settings)
