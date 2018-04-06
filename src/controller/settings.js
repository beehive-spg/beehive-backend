import {
	getSettings,
	postDistribution,
	postRouting,
	postDrones,
} from 'persistence/settings'

const settings = async () => {
	const objects = await getSettings()

	return {
		distribution: false,
		routing: true,
		drones: 20,
	}
}

const setDist = async value => {
	const object = { value }
	await postDistribution(object)
	return true
}

const setRout = async value => {
	const object = { value }
	await postRouting(object)
	return true
}

const setDrones = async value => {
	const object = { value }
	await postDrones(object)
	return true
}

export { settings, setDist, setRout, setDrones }
