// This will contain

// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a Product schema
const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	typeOfMotorcycle: { type: String, required: true },
	img: {
		type: String,
		default:
			'https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg',
	},
	yearsRiding: { type: Number, required: true },
	bikesOwned: { type: Number, required: true },
    experience: { type: String}
});

// create a Product model using the productSchema
const User = mongoose.model('User', userSchema);

// export the Destination model, will be accessed in `index.js`
module.exports = User;
