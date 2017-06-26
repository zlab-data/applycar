import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
 	Cloudinary.config({
 		cloud_name:'dcyqpeqbh',
 		api_key:'448942765988189',
 		api_secret: 'twiBkq48MujSH08yJ_HEli3SxhI',
 	})
});





