var express = require('express');
var router = express.Router();
const api_helper = require('./thirdparty_api')
const config = require('./config');

router.get('/markets_details', function (req, res) {
  api_helper.REMOTE_API_call(config.coindcx.api_url +'/exchange/v1/markets_details')
   .then(response => {
     console.log("api call");
     console.log(response);
       res.json(response)
   })
   .catch(error => {
       res.send(error)
   })
})

router.get('/history', function (req, res) {
  let pair = req.query.pair;
  let limit = req.query.limit;
  api_helper.REMOTE_API_call(config.coindcx.public_url +'/market_data/trade_history?pair='+pair+'&limit='+limit)
   .then(response => {
     console.log("api call");
     console.log(response);
       res.json(response)
   })
   .catch(error => {
       res.send(error)
   })
})

router.get('/order_book', function (req, res) {
  let pair = req.query.pair;
  api_helper.REMOTE_API_call(config.coindcx.public_url +'/market_data/orderbook?pair='+pair)
   .then(response => {
     console.log("api call");
     console.log(response);
       res.json(response)
   })
   .catch(error => {
       res.send(error)
   })
})

router.get('/candles', function (req, res) {
  let pair = req.query.pair;
  let interval = req.query.interval;
  api_helper.REMOTE_API_call(config.coindcx.public_url +'/market_data/candles?pair='+pair+'&interval='+interval)
   .then(response => {
     console.log("api call");
     console.log(response);
       res.json(response)
   })
   .catch(error => {
       res.send(error)
   })
})
module.exports = router;
