import { getStatistics } from 'persistence/statistics'

const statistics = id => {
	return getStatistics(id)
}

export { statistics }
