const express = require('express')
const cors = require('cors')
const path = require('path')
const cntl = require('./controller')
const app = express()
const port =  process.env.PORT || 7272

app.use(express.json());
app.use(express.static('client'))
app.use(cors())

app.get('/', cntl.mainFile)

app.get('/katie/languages', cntl.getLanguages)
app.get('/katie/devops', cntl.getDevs)
app.get('/katie/more', cntl.getMore)

app.listen(port, () => {
    console.log(`We're rollin' on ${port}`)
})