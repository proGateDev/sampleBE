require("dotenv").config();
const express = require('express')
const app = express()
// const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT | 8080, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})