import {
	getSettings,
	postDistribution,
	postRouting,
	postDrones,
} from 'persistence/settings'
import { produceSetting } from 'connect/producers'

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
	const setting = buildSetting('distribution', value)
	produceSetting(setting)
	await postDistribution(object)
	return true
}

const setRout = async value => {
	const object = { value }
	const setting = buildSetting('routing', value)
	produceSetting(setting)
	await postRouting(object)
	return true
}

const setDrones = async value => {
	const object = { value }
	const setting = buildSetting('drones', value)
	produceSetting(setting)
	await postDrones(object)
	return true
}

const buildSetting = (setting, value) => {
	return {
		setting,
		value,
	}
}

export { settings, setDist, setRout, setDrones }
