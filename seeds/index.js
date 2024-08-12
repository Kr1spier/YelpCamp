const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '66ad3c45c100c3791b3e2d95',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita dicta reprehenderit asperiores doloribus velit dignissimos doloremque ea nulla vero, qui reiciendis iste numquam, aliquid repellat harum necessitatibus inventore unde?',
            price,
            geometry: {
                type: 'Point',
                coordinates: [cities[random1000].longitude, cities[random1000].latitude],
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/e9ieyq1c3g1hyp5rylg8.jpg',
                    filename: 'YelpCamp/e9ieyq1c3g1hyp5rylg8',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/jxyqtmop1twz2kezzahn.jpg',
                    filename: 'YelpCamp/jxyqtmop1twz2kezzahn',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/w1p8zdzrrkpe7updpneh.jpg',
                    filename: 'YelpCamp/w1p8zdzrrkpe7updpneh',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/czpqzxposgzpvrlfyee0.jpg',
                    filename: 'YelpCamp/czpqzxposgzpvrlfyee0',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/tzb44qvvhxnynadt4rsi.jpg',
                    filename: 'YelpCamp/tzb44qvvhxnynadt4rsi',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/v3sklx45dst8yg3fwtdy.jpg',
                    filename: 'YelpCamp/v3sklx45dst8yg3fwtdy',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/btn8fz15a6eclvqdbv3t.jpg',
                    filename: 'YelpCamp/btn8fz15a6eclvqdbv3t',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/auvfuhtoyj0aclxm9w0k.jpg',
                    filename: 'YelpCamp/auvfuhtoyj0aclxm9w0k',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/umis9pgxzmcmh4hi4hga.jpg',
                    filename: 'YelpCamp/umis9pgxzmcmh4hi4hga',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/pjd8kbcorkpsj2lkglrn.jpg',
                    filename: 'YelpCamp/pjd8kbcorkpsj2lkglrn',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/bacsn0zqetuzchqe4aon.jpg',
                    filename: 'YelpCamp/bacsn0zqetuzchqe4aon',
                },
                {
                    url: 'https://res.cloudinary.com/doqljgvvi/image/upload/v1722967138/YelpCamp/oegtarmkj1d6xjlhyucc.jpg',
                    filename: 'YelpCamp/oegtarmkj1d6xjlhyucc',
                },
            ],
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
