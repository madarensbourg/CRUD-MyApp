const db = require('../models');
const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

//Imdex Route
router.get('/', (req, res) => {

	db.Destination.find({}, (err, destinations) => {
		res.render('home', {
			tabTitle: 'California Dreamin',
			destinations: destinations
		});
	});
	// res.render('home')
});

//New Route
router.get('/new', (req, res) => {
	res.send(`<form>This Will Freate New product</form>`);
});

//Show Route
router.get('/destination/:id', (req, res) => {
	db.Destination.findById(req.params.id, (err, destination) => {
		res.send(destination);
	});
});

//Create Route
router.post('/', (req, res) => {
	db.Destination.create(req.body, (err, destination) => {
		res.send(destination);
	});
});

//Update Route
router.put('/destination/:id', (req, res) => {
	db.Destination.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, destination) => {
			res.send(destination);
		}
	);
});

//Delete Route
router.delete('/destination/:id', (req, res) => {
	db.Destination.findByIdAndDelete(req.params.id, (err, destination) => {
		res.redirect('/');
	});
});

// SEED Route: When accessed this route will execute the function below and seed our database.
router.get('/seed', async (req, res) => {
	const newDestinations = [
		{
			name: 'Borrego Springs',
			timeOfYear: 'Spring',
			description:
				'Borrego Springs is a census-designated place in San Diego County, California. The population was 3,429 at the 2010 census, up from 2,535 at the 2000 census, made up of both seasonal and year-round residents. Borrego Springs is completely surrounded by Anza-Borrego State Park, the largest California State Park.',
			img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
			mileage: 85,
			roadTerrain: 'Downhill Grade',
		},
		{
			name: 'Big Sur',
			timeOfYear: 'Spring, Summer, Fall',
			description:
				'Big Sur is a rugged stretch of California’s central coast between Carmel and San Simeon. Bordered to the east by the Santa Lucia Mountains and the west by the Pacific Ocean, it’s traversed by narrow, 2-lane State Route 1, known for winding turns, seaside cliffs and views of the often-misty coastline. The sparsely populated region has numerous state parks for hiking, camping and beachcombing',
			img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
			mileage: 90,
			roadTerrain: 'Windy',
		},
		{
			name: 'California 1',
			timeOfYear: 'Summer',
			description:
				'State Route 1 is a major north–south state highway that runs along most of the Pacific coastline of the U.S. state of California. At 656 miles, it is the longest state route in California, and the second-longest in the US after Montana Highway 200.',
			img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
			mileage: 655.1,
			roadTerrain: 'Various Terrain Types',
		},
		{
			name: 'California 1',
			timeOfYear: 'Summer',
			description:
				'State Route 1 is a major north–south state highway that runs along most of the Pacific coastline of the U.S. state of California. At 656 miles, it is the longest state route in California, and the second-longest in the US after Montana Highway 200.',
			img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
			mileage: 655.1,
			roadTerrain: 'Various Terrain Types',
		},
	];

	try {
		const seedItems = await db.Destination.create(newDestinations);
		res.send(seedItems);
	} catch (err) {
		res.send(err.message);
	}
});

//Boilerplate exports rputes so they're accessible in server.js
module.exports = router;
