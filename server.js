const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const goalTrackerRoutes = express.Router();
const PORT = 4000;

let Goal = require('./goal.model');
let Activity = require('./activity.model');

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

goalTrackerRoutes.route('/goal/:id').get(function(req, res) {
    let id = req.params.id;
    Goal.findById(id, function(err, goal) {
        res.json(goal);
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

goalTrackerRoutes.route('/oneactivity').post(function(req, res) {
    let activity = new Activity(req.body);
    activity.save()
            .then(activity => {
                res.status(200).json({'activity': 'activity entered successfully'});
            })
            .catch(err => {
                res.status(400).send('entering activity failed');
            });
});

goalTrackerRoutes.route('/listactivity').get(function(req, res) {
    Activity.find(function(err, activities) {
        if (err) {
            console.log(err);
        } else {
            res.json(activities);
        }
    });
});

goalTrackerRoutes.route('/listactivity/:action').get(function(req, res) {
    let action = req.params.action;
    Activity.find({ act_action: action },function(err, activities) {
        if (err) {
            console.log(err);
        } else {
            res.json(activities);
        }
    });
});

app.use('/goals', goalTrackerRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});