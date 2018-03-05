import path from 'path'
import jackrabbit from 'jackrabbit'

import { processFlight } from 'controller/flight'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const rabbit = jackrabbit(process.env.RABBITMQ_URL)
const flights = rabbit.default().queue({ name: process.env.FLIGHTS_QUEUE })

const consumeFlights = () => {
	flights.consume(onFlight, { noAck: true })
}

const onFlight = data => {
	if (Buffer.byteLength(data, 'utf-8') === 0) return
	data = JSON.parse(data)
	processFlight(data)
}

const startConsumers = () => {
	consumeFlights()
}

export default startConsumers
