const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//routers
const usersRouter = require('./routes/users');

const app = express();

require("dotenv").config();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established!");
})

app.use('/Users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})