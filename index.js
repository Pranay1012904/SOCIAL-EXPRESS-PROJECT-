const express=require('express');
const router=express.Router();
const path=require('path');
const port=8000;
const cookieParser=require('cookie-parser');
const db=require('./config/mongoose');
const app=express();
const expressLayout=require('express-ejs-layouts');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set('layout extractStyles',true);

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('assets'));
app.use(expressLayout);
app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
        if(err){
            console.log("Error in deployment of server!");
        }
        console.log("Server deployed! Port:",port);
});