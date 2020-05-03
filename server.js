const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items")
require('dotenv').config();


const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = process.env.mongoURI

//CONNECT DB
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB CONNECTED..."))
    .catch(err => console.log(err));

//ROUTES API SET-UP
app.use("/api/items", items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}...`))