import path from 'path'
import rabbit from 'rabbot'
import { processFlight } from 'controller/flight'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const consumeFlights = () => {
	rabbit.handle({}, data => {
		if (data.queue === process.env.HOP_QUEUE) onFlight(data.content)
		data.ack()
	})
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
