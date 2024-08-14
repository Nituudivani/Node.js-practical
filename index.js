const express = require('express');
const mongoose = require('mongoose');

// rest object
const app = express();

// Replace with your MongoDB URI
const uri = 'mongodb://localhost:27017/mydatabase';


mongoose.connect(uri, {
})
.then(
    () => console.log('Connected to MongoDB')
)
.catch(
    (err) => console.error('Could not connect to MongoDB...', err)
);

//route
// URL => http://localhost:8080
app.get("/", (req, res) => {
    return res.status(200).send("<h1> Hello Word!  </h1>");

});

app.get("/Home", (req, res) => {
    return res.status(200).send("<h1> Welcome to Home!  </h1>");

});

app.post("/Profile", (req, res) => {
    return res.status(200).send("<h1>  welcome to Profile </h1>");

});

// PORT
const PORT = 8080;



// listen

app.listen(PORT, () => {
    console.log(" Node Server Running");
});






