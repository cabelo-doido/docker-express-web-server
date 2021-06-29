'use strict'

const express = require('express')

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
  console.log(`Web app was run on port ${port}!`)
})

//comment something feature1
