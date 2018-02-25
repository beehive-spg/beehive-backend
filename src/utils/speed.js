import { format, differenceInSeconds } from 'date-fns'

const speed = (start, end, distance) => {
	const startdate = new Date(start)
	const enddate = new Date(end)
	const timespan = differenceInSeconds(enddate, startdate)

	const velocity = distance / timespan
	return Math.round(velocity)
}

export default speed
