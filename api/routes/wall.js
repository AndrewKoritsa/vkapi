const querystring =  require('querystring')

const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get('/', ( req, res, next ) => {

  res.status(200).json({

    message : 'GET wall'

  })

})

router.get('/:query', ( req, res, next ) => {

  const data = {
    q:'#pzорел',
    access_token:'7f6daabe7f6daabe7f6daabe357f05ebf077f6d7f6daabe23245c6ebde1563355251c5b',
    v:'5.92'
  }

  let result

  axios({
    method: 'post',
    url: 'https://api.vk.com/method/newsfeed.search',
    data: querystring.stringify(data),
    })
    .then(function (response) {
      // handle success
      //console.log( response )
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      // handle error
      //console.log( error )
      res.status(400).json(error)
    })


})

module.exports = router
