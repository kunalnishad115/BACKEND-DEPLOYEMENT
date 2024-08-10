require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram',(req,res) => {
     res.send('MY ID : kunal_x_volt')
})
app.get('/login', (req,res) =>{
   res.send('<h1>YUHHHH LOGIN..</h1>')
})
app.get('/youtube',(req,res) => {
    res.send('HURRAH')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})