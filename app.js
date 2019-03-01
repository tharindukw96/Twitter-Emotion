var express = require('express');
var path = require('path');
var app = express();




//set public folder
app.use(express.static(path.join(__dirname, 'public')));

// set the views
app.set('views', path.join(__dirname, 'views'));

//set view engine as ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    /*
    var http = require('http');
    var str = '';

    var options = {
        host: '127.0.0.1',
        path: '/analyze/trump',
        port:'5000'
    };

    callback = function (response) {

        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            tweets = JSON.parse(str);
            tweets = tweets.tweets;
            //console.log(tweets[0][0])
            res.render('index',{tweets});
        });

        //return str;
    }
    
    var req = http.request(options, callback).end();
    */
   res.render('index');
})

module.exports = app;