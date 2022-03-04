//import lib
const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const body_Parser = require('body-parser');

//cofig app and port
const app = express()
const port = 3003

//use lib
app.use(cors());
app.use(fileUpload());
app.use(body_Parser.urlencoded({extended: false}));
app.use(body_Parser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//import router by function
require('./app/routers/test.router')(app);
require('./app/routers/home.router')(app);

//get image from backend
app.get('/image/:id', (req, res) => {
  res.download('./app/public/image/' + req.params.id);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})