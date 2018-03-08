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

rabbit.configure({ connection }).then(() => {
	init()
})

const init = () => {
	console.log('Initializing Rabbot...')
	rabbit
		.addExchange('amq.direct', 'direct', { durable: true })
		.catch(error => {
			console.log(error)
			setTimeout(() => {
				init()
			}, 1000)
		})
	rabbit.addExchange('eventex', 'direct', { durable: true })

	rabbit.addQueue(process.env.ORDERS_QUEUE, { durable: true })
	rabbit.addQueue(process.env.HOP_QUEUE, { durable: true, subscribe: true })

	rabbit.bindQueue('amq.direct', process.env.ORDERS_QUEUE)
	rabbit.bindQueue('eventex', process.env.HOP_QUEUE)

	console.log('Rabbot initialized')
}
