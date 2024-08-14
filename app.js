const express = require('express');
const mongoose = require('mongoose');

// Create the Express app
const app = express();

app.use(express.json());

// Replace with your MongoDB URI
mongoose.connect('mongodb://localhost:27017/mynewdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Define the Schema
const schema = {
    name: String,
    email: String,
    id: Number
};

const Model = mongoose.model("NEWCOL", schema);

// POST route
app.post("/post", async (req, res) => {
    try {
        console.log("Inside POST function");

        const data = new Model({
            name: req.body.name,
            email: req.body.email,
            id: req.body.id
        });

        await data.save();
        res.send("Posted successfully");
    } catch (error) {
        res.status(500).send("Error posting data");
    }
});

// FETCH GET route
app.get('/fetch/:id', async (req, res) => {
    try {
        const fetchid = req.params.id;
        const result = await Model.findOne({ id: fetchid });
        if (result) {
            res.send(result);
        } else {
            res.status(404).send("Data not found");
        }
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});


// PUT route
app.put('/update/:id', async (req, res) => {
    try {
        const fetchid = req.params.id;
        const updatedData = {
            name: req.body.name,
            email: req.body.email
        };

        const result = await Model.findOneAndUpdate({ id: fetchid }, updatedData, { new: true });
        
        if (result) {
            res.send(result);
        } else {
            res.status(404).send("Data not found");
        }
    } catch (error) {
        res.status(500).send("Error updating data");
    }
});


// DELETE route
app.delete('/delete/:id', async (req, res) => {
    try {
        const fetchid = req.params.id;
        const result = await Model.findOneAndDelete({ id: fetchid });

        if (result) {
            res.send("Deleted successfully");
        } else {
            res.status(404).send("Data not found");
        }
    } catch (error) {
        res.status(500).send("Error deleting data");
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
