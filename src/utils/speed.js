import { format, differenceInSeconds } from 'date-fns'

const speed = (startdate, enddate, distance) => {
	const timespan = differenceInSeconds(enddate, startdate)

	const velocity = distance / timespan
	return Math.round(velocity)
}

export default speed
