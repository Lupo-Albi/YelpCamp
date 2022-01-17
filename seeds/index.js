const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 200; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10;

		const camp = new Campground({
			title: `${sample(descriptors)} ${sample(places)}`,
			geometry: { type: 'Point', coordinates: [ cities[random1000].longitude, cities[random1000].latitude ] },
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			author: '61dec26bfc815ded7411ced5', // Your user ID
			images: [
				{
					url:
						'https://res.cloudinary.com/df7j5evus/image/upload/v1642169275/YelpCamp/cymbxkhbllnlwpbj8cyv.jpg',
					filename: 'YelpCamp/cymbxkhbllnlwpbj8cyv'
				},
				{
					url:
						'https://res.cloudinary.com/df7j5evus/image/upload/v1642169275/YelpCamp/pgmh731qmhydw3uiwhwj.jpg',
					filename: 'YelpCamp/pgmh731qmhydw3uiwhwj'
				}
			],
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel libero cumque veniam maiores aliquam, animi accusamus alias! Aspernatur eligendi iure accusantium earum nisi deleniti, eum perferendis dolorum, voluptatibus velit magnam.',
			price
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
