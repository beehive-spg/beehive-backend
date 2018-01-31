import path from 'path'
import axios from 'axios'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const getOrders = async () => {
	return []
}

const getOrder = async id => {
	return null
}

const createOrder = async () => {
	return true
}

export { getOrders, getOrder, createOrder }
