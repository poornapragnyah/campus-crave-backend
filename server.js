const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shopRoutes = require('./routes/shops.js');
const loginRoutes = require('./routes/login.js')
const signupRoutes = require('./routes/signup.js');


// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/shops', shopRoutes)

app.use('/api/login',loginRoutes)
app.use('/api/signup',signupRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database!')
    app.listen(process.env.PORT, () => {
      console.log('Listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 