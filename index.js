require("dotenv").config();
const express = require('express')
const app = express()
// const port = process.env.WEBSITES_PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log(`Example app listening at http://localhost:8000`)
})