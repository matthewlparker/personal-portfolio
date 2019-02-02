const express = require('express')
const morgan = require('morgan')
const https = require('https')
const fs = require('fs')
const app = express()

app.use(morgan('common'))
app.use(express.static(`${__dirname}/build`))
app.get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`))

let port = process.env.PORT || 5050

app.listen(port, () => {
  console.log('***SERVER UP AT PORT:', port)
})
