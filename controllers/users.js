const db = require('../models');
const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

//Create Route
router.post('/', (req, res) => {
	db.User.create(req.body, (err, user) => {
		res.send(user);
	});
});

// SEED Route: When accessed this route will execute the function below and seed our database.
router.get('/user/seed', async (req, res) => {
	const newUsers = [
		{
			firstName: 'Miguel Darernsbourg',
			lastName: 'Darensbourg',
			typeOfMotorcycle: 'Harley Davidson',
			img: 'https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg',
			yearsRiding: 12,
			bikesOwned: 2,
			experience: 'Expert',
		},
	];

	try {
		const seedItems = await db.User.create(newUsers);
		res.send(seedItems);
	} catch (err) {
		res.send(err.message);
	}
});

//Boilerplate exports rputes so they're accessible in server.js
module.exports = router;