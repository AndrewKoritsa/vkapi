const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const wallRoutes = require('./api/routes/wall')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//headers
app.use(( req, res, next ) => {

  res.header( 'Access-Control-Allow-Origin', '*' )
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' )

  if( res.method === 'OPTIONS' ){

    req.header( 'Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET' )
    return res.status(200).json({})

  }

  next()

})

// routes
app.use('/wall', wallRoutes)


//404
app.use(( req, res, next ) => {

  const error = new Error('Not found')
  error.status = 404
  next(error)

})

//500
app.use(( error, req, res, next ) => {

  res.status( error.status || 500 ).json({

      error: {
        message : error.message
      }

    })

})

module.exports = app
