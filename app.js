// const { compose } = require('async');
// const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');

// const blogRoutes = require('./routes/blogRoutes');
// //create a instance of express app 
// const app = express();

// const DBUI = "mongodb+srv://pankaj:pankaj@cluster0.fgwan.mongodb.net/node?retryWrites=true&w=majority";
// mongoose.connect(DBUI).then((result) => {
//     //listen for request
//     app.listen(3000);
// });
// //register view engine. lloks for default in 'views' folder
// app.set('view engine','ejs');
// //set another folder
// //app.set('views','myviews');




// // //log middleware
// // app.use((req,res,next) => {
// //     console.log('new request made:');
// //     console.log('host: ',req.hostname);
// //     console.log('path: ',req.path);
// //     console.log('method: ',req.method);
// //     next();
// // });

// //morgan middleware
// app.use(morgan('dev'));

// //static files - middleware
// app.use(express.static('public'));

// //takes url encoded data and passes it along
// app.use(express.urlencoded({extended:true}));

// //home
// app.get('/',(req,res) => {
//    res.redirect('/blogs');
// }); 

// //about
// app.get('/about',(req,res) => {
//     //res.send('<p>About</p>');
//     res.render('about' , {title: 'About'});
// }); 


// //blog routes
// app.use('/blogs',blogRoutes);


// //404
// //use is fired for every request that is made . but only if that request does not trigger some response before reaching the use statement. 
// //Think of use like the default case in switch statement. 
// app.use((req,res) => {
//     res.status(404).render('404',{title: '404'});
// });

// //view engines allow us to write html code but add dynamic variables and loops to allow interactivity.
// //ex. handlebars and pug ejs-embedded javascript embedding