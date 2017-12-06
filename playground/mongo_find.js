const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
 if(err){
    return console.log('Unable to connect to the mongo server',err);
 }

 console.log('Mongo connection started');
 db.collection('Users').find({$or:[{age:25},{location:{$regex:/^S/}}]}).toArray().then((docs)=>{
    console.log(docs);
 },(err)=>{
    console.log('Unable to fetch users',err);
 });

 db.collection('Todos').find().toArray().then((docs)=>{
     console.log('Todo reslut : ');
    console.log(docs);
 },(err)=>{
    console.log('Unable to fetch users',err);
 });


 //db.close();
});