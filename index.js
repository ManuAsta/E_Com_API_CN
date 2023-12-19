/**load Dotenv */
const dotenv=require('dotenv').config();
/**Express APP*/
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
/**Database*/
const db=require('./config/mongoose');
//parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json()); //for parsing json data from postman

//testing
// app.use((req,res,next)=>{ //testing the req.bdoy
//   console.log("Reqest body here is ",req.body);
//   next();
// })


//route
app.use('/',require('./routes'));
//listener on port
app.listen(port, (err) => {
  if(err){
    console.log("Server is not listening on the port", port);
  }
  console.log(`Server is listening on port ${port}`)
})