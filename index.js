
const express = require('express');
const app = express(); 
const path =require('path');

const PORT = process.env.PORT || 5000; 

const love_u = "this the varable that we are passing";
	



const exphbs =require('express-handlebars');
//set Handlebar Middleware
	app.engine('handlebars', exphbs());
	app.set('view engine', 'handlebars');
//set handlebar routes
	app.get('/', function (req, res) {
    	res.render('home',{jk:love_u});
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT, () => console.log('server is runningon port'+PORT));