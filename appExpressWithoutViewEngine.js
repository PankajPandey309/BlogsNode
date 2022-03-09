const express = require('express');

//create a instance of express app 
const app = express();

//register view engine. lloks for default in 'views' folder
app.set('view enigne','ejs');
//set another folder
//app.set('views','myviews');

//listen for request
app.listen(3000);

//home
app.get('/',(req,res) => {
    //res.send('<p>Home</p>');
    res.sendFile('./views/index.html' , {root : __dirname});
}); 

//about
app.get('/about',(req,res) => {
    //res.send('<p>About</p>');
    res.sendFile('./views/about.html' , {root : __dirname});
}); 

//redirects
app.get('/about-us',(req,res) => {
 res.redirect('/about');
});



//404
//use is fired for every request that is made . but only if that request does not trigger some response before reaching the use statement. 
//Think of use like the default case in switch statement. 
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html' , {root : __dirname});
});

//view engines allow us to write html code but add dynamic variables and loops to allow interactivity.
//ex. handlebars and pug ejs-embedded javascript embedding