# 🏕 YelpCamp
<a href="https://yelp-camp-lupo.herokuapp.com/">
 <p align="center">
  <img src="https://i.imgur.com/ZBBDvNC.png?w="350" alt="Campground"
 </p>
</a>

YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's [Web Developer Bootcamp course](https://www.udemy.com/course/the-web-developer-bootcamp/) on Udemy.  

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.  

## Features
* Users can create, edit, and remove campgrounds
* Users can review campgrounds and remove their review

## Run it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a Cloudinary account to get a cloud name, API key and secret code
3. Create a Mapbox account to get a token

```
git clone https://github.com/Lupo-Albi/YelpCamp.git
cd YelpCamp
npm install
```
## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for
  modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

Fill the environment variables in .env.example and rename it to .env (or just copy the content to a .env file in the root of the project)


Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.  

Then go to [localhost:3000](http://localhost:3000/).
