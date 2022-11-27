// This will contain

// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a Product schema
const destinationSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	img: {
		type: String,
		default:
			'https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg',
	},
	mileage: { type: Number, required: true },
	road: { type: Number, required: true },
});

// create a Product model using the productSchema
const Destination = mongoose.model('Destination', destinationSchema);

// export the Destination model, will be accessed in `index.js`
module.exports = Destination;
