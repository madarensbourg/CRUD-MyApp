const db = require('./');

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

db.Destination.deleteMany({}, (err, destination) => {
	if (err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('Removed all log entries');

		db.LogEntry.insertMany(newDestinations, (err, destination) => {
			if (err) {
				console.log('Error occured in insertMany', err);
			} else {
				console.log('Created', destination.length, 'log entries');
				process.exit();
			}
		});
	}
});