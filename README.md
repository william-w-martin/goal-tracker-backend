# Unnamed Goal Tracker App - Back End
Uses Node.js and MongoDB
 
Created based on the MERN stack tutorial found here:
https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/

Connects with the front end at github.com/william-w-martin/goal-tracker

Installation steps:
```
$ npm init -y
$ npm install express body-parser cors mongoose
$ npm install -g nodemon
Install MongoDB https://docs.mongodb.com/manual/administration/install-community/
Create a directory for the MongoDB database, then create a database. 
This app uses 'goal-tracker' for a database.
$ npm install axios
```

Start the MongoDB database with this command:
```
$ mongod
```

Start the server with this command (it should automatically connect to the Mongo DB):
```
$ nodemon server
```
