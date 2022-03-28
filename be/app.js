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
  res.send('Hello!!')
})

//import router by function
require('./app/routers/test.router')(app);
require('./app/routers/home.router')(app);
require('./app/routers/product.router')(app);
require('./app/routers/account.router')(app);

//get image from backend
app.get('/image/:id', (req, res) => {
  res.download('./app/public/image/' + req.params.id);
})
//upload image to backend
app.post('/image', (req, res) => {
  if(req.file === null){
      return res.status(400).json({message: 'No file uploaded'});
  }
  
  const file = req.files.file;

  file.mv(`${__dirname}/app/public/image/${file.name}`, err =>{
      if(err){
          return res.status(500).send(err);
      }

      res.json({fileName: file.name, filePath: `/image/${file.name}`});
  });
});



//post login
// app.post('/login', (req, res) => {
//   res.send("Hello login")
// })

// Shopping Cart - Khiem
// app.get('/api/cart', (req, res) => {
//   res.send('cart')
// })
// app.post('/api/cart', (req, res) => {
// 	console.log(req.body)
// })

app.get('/api/cart/delete', (req, res) => {
  res.send('cart delete')
})
app.post('/api/cart/delete', (req, res) => {
	console.log(req.body)
})

app.get('/api/profile', (req, res) => {
  res.send('profile')
})
app.post('/api/profile', (req, res) => {
	console.log(req.body)
})

// 
app.listen(port, () => {
  console.log(__dirname)
  console.log(`Listening on port ${port}`)
})