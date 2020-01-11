var express = require('express');
var app = express();
var port = 80;
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('static'));



app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});
