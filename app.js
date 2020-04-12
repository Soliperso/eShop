// Requiring Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const productRoutes = require('./routes/product')

// Connect Mongoose to the DB
mongoose.connect("mongodb://localhost:27017/dz_eShop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("err", console.error.bind(console, "Connection error"));
db.once("open", () => console.log("Successfully connected to DB"));

// App Config
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


// Middlewares 
app.use(productRoutes)

// Listening to the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port port 🔥`));
