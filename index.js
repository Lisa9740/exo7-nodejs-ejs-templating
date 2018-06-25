const express = require('express');
const app = express();
var port = 3560;
var competences = require ('./data/compétence.json')

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/', function(req, res) {
    
  var dataToEJS = {
    competences: competences
  }
    res.render('index', dataToEJS );
});

app.get('/competence', function(req, res) {

res.sendFile(__dirname +"/compétence.json");
});


app.listen(port, function(){
    console.log('the port is on')
});
