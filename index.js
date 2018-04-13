var express = require('express');
var tbs = require('express-handlebars')
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 8080);

app.engine('handlebars', tbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', function(req, res){
    res.render('main');
})

app.listen(app.get('port'), function(){
    console.log(`Jerome Server started at ${app.get('port')}`);
})
