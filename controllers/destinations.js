const db = require('../models');
const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

// SEED Route: When accessed this route will execute the function below and seed our database.
router.get('/seed', async (req, res) => {
	const newDestinations = [
		{
			name: 'Borrego Springs',
			timeOfYear: 'Spring',
			description:
				'Borrego Springs is a census-designated place in San Diego County, California. The population was 3,429 at the 2010 census, up from 2,535 at the 2000 census, made up of both seasonal and year-round residents. Borrego Springs is completely surrounded by Anza-Borrego State Park, the largest California State Park.',
			img: 'https://www.desertusa.com/borrego/photos/IMG_4720.jpg',
			mileage: 85,
			roadTerrain: 'Downhill Grade',
			difficulty: 'Moderate',
		},
		{
			name: 'Big Sur',
			timeOfYear: 'Spring, Summer, Fall',
			description:
				'Big Sur is a rugged stretch of California’s central coast between Carmel and San Simeon. Bordered to the east by the Santa Lucia Mountains and the west by the Pacific Ocean, it’s traversed by narrow, 2-lane State Route 1, known for winding turns, seaside cliffs and views of the often-misty coastline. The sparsely populated region has numerous state parks for hiking, camping and beachcombing',
			img: 'https://en.wikipedia.org/wiki/Big_Sur#/media/File:Central_Californian_Coastline,_Big_Sur_-_May_2013.jpg',
			mileage: 90,
			roadTerrain: 'Windy',
			difficulty: 'Moderate',
		},
		{
			name: 'California 1',
			timeOfYear: 'Summer',
			description:
				'State Route 1 is a major north–south state highway that runs along most of the Pacific coastline of the U.S. state of California. At 656 miles, it is the longest state route in California, and the second-longest in the US after Montana Highway 200.',
			img: 'https://www.lanmodo.com/res/article/Lanmodo-NVS/highway-1-california-road-trip.jpg',
			mileage: 655.1,
			roadTerrain: 'Various Terrain Types',
			difficulty: 'Expert',
		},
		{
			name: 'Avenue Of the Giants',
			timeOfYear: 'Summer',
			description:
				'The Avenue of the Giants is a scenic highway in northern California, United States, running through Humboldt Redwoods State Park. It is named after the coastal redwoods that tower over the route. The road is a former alignment of U.S. Route 101, and continues to be maintained as a state highway as State Route 254.',
			img: 'https://www.mdvaden.com/images/Avenue_Giants_760.jpg',
			mileage: 31.59,
			roadTerrain: 'Various Terrain Types',
			difficulty: 'Beginner',
		},
	];

	try {
		const seedItems = await db.Destination.create(newDestinations);
		res.send(seedItems);
	} catch (err) {
		res.send(err.message);
	}
});

//Index Route
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
	res.render('newDestination', {
		tabTitle: 'create new',
	});
});

//Show Route
router.get('/:id', (req, res) => {
	db.Destination.findById(req.params.id, (err, destination) => {
		res.render('showDestination', {
            tabTitle: "Destination: " + destination.name,
            destination: destination
        });
	});
});

//////////////////////////////////////////
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////

// New Route (GET/Read): This route renders a form the user will use to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('newDestination', {
        tabTitle: "Destination Creation"
    })
})

// <<<<<<< HEAD
// >>>>>>> main
router.get('/:id', (req, res) => {
    db.Destination.findById(req.params.id, (err, destination) => {
        // res.send(location)
        res.render("showDestination", {
            destination: destination,
            tabTitle: "Destination: " + destination.name
        })
    })
})

router.post('/', (req, res) => {
	db.Destination.create(req.body, (err, destinations) => {
		res.send(destinations);
	});
});
//create location route
// =======
// Create Route (POST/Create): This route receives the POST request sent from the new route above, parses it into a location object, creates the location object as a document in the locations collection, and redirects the user back to the root/home page
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.Destination.create(req.body, (err, destination) => {
        res.redirect('/destination')
    })
})
// >>>>>>> main

// Show Route (GET/Read): This route will show an individual location document using the URL parameter (which will always be the location document's ID)
router.get('/:id', (req, res) => {
    db.Destination.findById(req.params.id, (err, destination) => {
        res.render("showDestination", {
            destination: destination,
            tabTitle: "Destination: " + destination.name
        })
    })
})


// //Create Route
// router.post('/', (req, res) => {
// 	db.Destination.create(req.body, (err, destination) => {
// 		res.send(destination);
// 	});
// });

// //Update Route
// router.put('/:id', (req, res) => {
// 	db.Destination.findByIdAndUpdate(
// 		req.params.id,
// 		req.body,
// 		{ new: true },
// 		(err, destination) => {
// 			res.send(destination);
// 		}
// 	);
// });

// //Delete Route
// router.delete('/destination/:id', (req, res) => {
// 	db.Destination.findByIdAndDelete(req.params.id, (err, destination) => {
// 		res.redirect('/');
// 	});
// });



//Boilerplate exports rputes so they're accessible in server.js
module.exports = router;
