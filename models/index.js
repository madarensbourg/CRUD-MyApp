// THIS FILE WILL CONNECT TO THE DATABASE VIA MONGOOSE AND PASS MY MODEL TO THE CONTROLLER
// dependencies
const mongoose = require('mongoose');

// connect to MongoDB via mongoose
const connectionString = process.env.MONGODBURI;
mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// console.log() connection status
mongoose.connection.on('connected', () => {
	console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
	console.log('mongoose error ', error);
});

// access models
module.exports.Destination = require('./destination.js');
module.exports.User = require('./user.js')
