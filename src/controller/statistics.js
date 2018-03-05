import { getStatistics } from '~/src/persistence/statistics'

const statistics = id => {
	return getStatistics(id)
}

export { statistics }
