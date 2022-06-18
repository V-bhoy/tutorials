const express = require('express');
const connection = require('./db');
const userRoutes = require('./routes/main');
const cors = require('cors');



const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./public'))
app.use(cors());
app.use("/login", userRoutes);



app.listen(8080,async()=>{
    try {
        await connection;
        console.log("connected to db")
    }
    catch(err){
       console.log("Unable to connect",err)
    }
})
