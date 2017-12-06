const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
 if(err){
    return console.log('Unable to connect to the mongo server',err);
 }

 console.log('Mongo connection started');

 db.collection('Todos').insertOne({
    text:'New things are coming to do.',
    completed:false
 },(err,result) => {
    if(err){
        return console.log('Unable to insert in db ',err);
    }

    return console.log(JSON.stringify(result.ops,undefined,2))
 });

db.collection('Users').insertOne({
    name:'Vipin kumar',
    age:25,
    location:'Kalandi Sardhana (UP)'
}, (err,user)=> {
 if(err){
    return console.log('unable to insetrt',err);
 }

 return console.log(user.ops);
});
 db.close();
});