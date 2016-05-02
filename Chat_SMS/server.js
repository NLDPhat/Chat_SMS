var express=require('express');
var mongoose = require('mongoose');
var path=require('path');
var app=express();

// configuew app
	app.set('view engine','ejs');
//	app.set('views/Layout_App/',path.join(__dirname,'views/Layout_App/'));

// use middleware
	app.use(express.static(path.join(__dirname,'bower_components')));
// define routes
// index page
	app.get('/', function(req,res){
		res.render('Page/index')
	});

app.listen(3000,function(){
	console.log('ready on port 3000');
});