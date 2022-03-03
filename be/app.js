const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

require('./app/routers/test.router')(app);




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})