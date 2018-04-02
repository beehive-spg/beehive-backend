import { loggers, transports, format } from 'winston'

const { combine, timestamp, printf } = format
const loggingFormat = printf(
	info => `${info.timestamp} [${info.level}]: ${info.message}`,
)

loggers.add('info', {
	format: combine(timestamp(), loggingFormat),
	transports: [
		new transports.Console({ colorize: true }),
		new transports.File({ filename: 'error.log', level: 'error' }),
		new transports.File({ filename: 'combined.log' }),
	],
})
