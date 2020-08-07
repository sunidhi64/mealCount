const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.FOOD_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', () => {
        console.log("MongoDB database connected");
})

const studentsRouter = require('./routes/students');
const messauthRouter = require('./routes/messauth');

app.use('/students', studentsRouter);
app.use('/messauth', messauthRouter);


app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
});


