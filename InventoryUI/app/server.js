const express = require('express');
const app     = express();
const path    = require('path');
const port    = 3030;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, 'public/imgs')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
