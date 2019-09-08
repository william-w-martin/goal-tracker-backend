const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const goalTrackerRoutes = express.Router();
const PORT = 4000;

let Goal = require('./goal.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/goal-tracker', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

goalTrackerRoutes.route('/').get(function(req, res) {
    Goal.find(function(err, goals) {
        if (err) {
            console.log(err);
        } else {
            res.json(goals);
        }
    });
});

goalTrackerRoutes.route('/add').post(function(req, res) {
    let goal = new Goal(req.body);
    goal.save()
        .then(goal => {
            res.status(200).json({'goal': 'goal added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new goal failed');
        });
});

app.use('/goals', goalTrackerRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});