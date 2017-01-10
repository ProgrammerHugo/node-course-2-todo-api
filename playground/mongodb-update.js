//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if (err){
       return  console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server');

/*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID ('5874e66a7d583202b06af4d9')
    }, {
        $set: {
            completed: true 
        }
}, {
    returnOriginal: false
}).then ((result)=>{
    console.log(result);
})  ;
*/


db.collection('Users').findOneAndUpdate ({
    _id: new ObjectID('5874e031ff9d162f0bdb3e6c')
}, {
    $set:{
        name: 'Michael Kiske',
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then ((result)=> {
    console.log (result);
});

    
    //db.close();

     
});