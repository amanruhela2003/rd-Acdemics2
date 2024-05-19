const express = require('express')
const app = express();
const connect = require('./connection')
const course = require('./routes/course');
const branch = require('./routes/branch');
const subject = require('./routes/subject')

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(course);
app.use(branch);
app.use(subject);



connect();
app.listen(3000 , (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server is running on 3000");
    }
})