// loads env variables
const dotenv = require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const app = express();
app.use(bodyparser.json());
app.use(express.json());

const port = process.env.PORT || 5000; 


// code snippet by https://stackoverflow.com/a/18311469
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


const defaultRoute = require("./routes/defaultRoute");
app.use('/', defaultRoute);



// database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});
const db = mongoose.connection;
//console.log(db)
db.on("error", (error) => console.error(error));
db.once("open", () => console.log('Connected to mongo!'));

app.listen(port, () => console.log(`Listening on port ${port}`)); 