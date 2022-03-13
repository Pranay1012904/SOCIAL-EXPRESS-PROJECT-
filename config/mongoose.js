const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/passport_13_3');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connection to the database'));

db.once('open',()=>{
    console.log("Successfullt connected to db!");
});