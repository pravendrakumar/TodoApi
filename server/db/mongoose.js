// Bring Mongoose into the app 
var mongoose = require( 'mongoose' ); 
mongoose.Promise = global.Promise;
// Build the connection string 
var dbURI = 'mongodb://localhost:27017/ConnectionTest'; 

// Create the database connection 
mongoose.connect(dbURI,{useMongoClient:true}); 

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
console.log('Mongoose default connection disconnected'); 
});

module.exports = {mongoose};