const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ESchool', {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true});
mongoose.connect('mongodb+srv://admin:admin@cluster0.rf4rk.mongodb.net/eschool?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

/*
	Makign a connection to out database
*/
const db = mongoose.connection;


/*
	Defining a schema for user
*/
var userSchema = new mongoose.Schema({
	name : String,
	email : String,
	password : String,
})

/*
	Binding our schema with model and remember Users -> will become users in our
	collection under our database
*/
var userModel = mongoose.model('user', userSchema)



/*
	Creating our fresh user
*/
var newUser = new userModel({name : 'James', email : 'James@gmail.com', password : 'James'});



/*
	Creating certain events
*/
db.on('connected', () => console.log("connected successfully"))

db.on('error', console.error.bind(console, 'connection error:'));

db.on('disconnected', () => console.log("disconnected successfully"))






/*
	Inserting our newUser into database
*/
// db.once('open', () => {
// 	newUser.save((err, res) =>{
// 		if(err) throw error;
// 		console.log(res)
// 		db.close()
// 	}) 
// })


/*
	Deleting some entries
*/
// db.once('open', () => {
// 	employeeModel.deleteMany({name : "Ross"}, (err, data) => {
// 		if(err) throw error;
// 		console.log(data)
// 		db.close()
// 	})
// })

/*
	Finding some thing from the db
*/



/*
	Filter using some properties
*/

// db.once('open', () => {
// 	employeeModel.find({ name: 'David' }  , (err, data) => {
// 		if(err) throw error;
// 		console.log(data)
// 		db.close()
// 	})
// })

module.exports = userModel