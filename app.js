var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./public/conf/'+process.env.DT_FRONTEND_LANDING+'/config.json')

app.set('port', (process.env.DT_FRONTEND_LANDING_PORT || process.env.PORT));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.engine('js', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.version = 3;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/', function(req, res) {
    res.render('pages/index', {
        taskUri : config.taskUri
    });
});
