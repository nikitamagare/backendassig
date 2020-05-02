var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//now to insert or read rom the db we have to import that model file here first

let movieDB = require("./models/movieDB.model.js")

//This is bodyParser config 
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json({limit: '5mb', extended: true}));


//connect to mongoose
const url = "mongodb://localhost:27017"
mongoose.connect(url, {
    useNewUrlParser: true,
    dbName: "movieDB",
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.post('/', async function(req,res){
	let name = req.body.incomingName;
	let img = req.body.img;
	let summary = req.body.summary;

	let movie = new movieDB({name:name,img:img,summary:summary})
	await movie.save()

	res.send('done saved successfully')

	
});

app.get('/fetchAll',async function(req,res){
	//here we fetch all the documents that are there in the database

	let allDocs = await movieDB.find();
	res.json(allDocs)
});

app.listen(3000);
console.log('running on port 3000......');

