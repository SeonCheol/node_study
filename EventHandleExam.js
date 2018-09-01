var events = require('events')

var eventEmitter = new events.EventEmitter()

var connectHandler = () => {
	console.log("connection Successful")
	eventEmitter.emit("data_received")
}

eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received', () => console.log('data received'))
eventEmitter.emit('connection')
console.log('end')
