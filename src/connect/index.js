import path from 'path'
import rabbit from 'rabbot'
import winston from 'winston'
import consumers from './consumers'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const logger = winston.loggers.get('info')

consumers()

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
	{ name: 'newx', type: 'direct', durable: true },
	{ name: 'eventex', type: 'fanout', durable: true },
	{ name: 'errorex', type: 'direct', durable: true },
	{ name: 'settingsx', type: 'fanout', durable: true },
]
const queues = [
	{ name: process.env.ORDERS_QUEUE, durable: true },
	{
		name: process.env.HOP_QUEUE,
		durable: true,
		subscribe: true,
	},
	{ name: process.env.ERROR_QUEUE, durable: true },
	{ name: 'routing_settings', durable: true },
	{ name: 'distribution_settings', durable: true },
	{ name: 'generator_settings', durable: true },
]
const bindings = [
	{ exchange: 'newx', target: process.env.ORDERS_QUEUE },
	{ exchange: 'eventex', target: process.env.HOP_QUEUE },
	{ exchange: 'errorex', target: process.env.ERROR_QUEUE },
	{ exchange: 'settingsx', target: 'routing_settings' },
	{ exchange: 'settingsx', target: 'distribution_settings' },
	{ exchange: 'settingsx', target: 'generator_settings' },
]
const settings = { connection, exchanges, queues, bindings }

rabbit.on('failed', () => {
	logger.error('Failed to connect to RabbitMQ')
	rabbit.retry()
})
rabbit.on('unreachable', () => {
	logger.error('RabbitMQ unreachable')
	rabbit.retry()
})
rabbit.on('connected', () => {
	logger.info('Connected to RabbitMQ')
	rabbit.connections.default.promise = new Promise((res, rej) => {
		res()
	})
	rabbit.configure(settings).then(() => logger.info('Initialized RabbitMQ'))
})

rabbit.configure({ connection }).catch(error => {
	logger.error('First RabbitMQ connection attempt failed')
	logger.error(error)
})
