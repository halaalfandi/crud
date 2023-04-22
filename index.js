const bodyParser = require('body-parser');
const express = require('express')
const logger=require('morgan')
const mongoose = require('mongoose');
const bookRouter=require('./routes/bookRouter')
const app = express()
const port = 3000;

mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true});


app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
 
  app.use('/api/book',bookRouter)

app.listen(port, () => console.log(`Express app running on http://localhost:${port}`));