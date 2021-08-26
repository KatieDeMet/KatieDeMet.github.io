const express = require('express')
const cors = require('cors')
const cntl = require('./controller')
const app = express()
const port =  process.env.PORT || 7777

app.use(express.json());
app.use(express.static('client'))
app.use(cors())

app.listen(port, () => {
    console.log(`We're rollin' on ${port}`)
})