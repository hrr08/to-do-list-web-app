var express = require('express'),
	app = express(),
	path = require('path'),
	config = require('./config'),
	mongoose = require('mongoose'),	
	setupController = require('./controllers/setupController'),
	apiController = require('./controllers/apiController'),
	port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());

//Call only once. Do not call again.
setupController(app);

apiController(app);

app.listen(port, function(){
	console.log("Listening at port " + port + "!");
});
