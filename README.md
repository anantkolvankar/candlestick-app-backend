# Candlestick application backend
Candlestick application backend is an node application which provides a REST API for candlestick angular application.

Front-end: [candlestick-app](https://github.com/anantkolvankar/candlestick-app)

# Setup
```sh
$ git clone https://github.com/anantkolvankar/candlestick-app-backend.git
$ cd candlestick-app-backend
$ npm install
```
# Run
```sh
$ npm start
```

## Docker support
```sh
$ cd candlestick-app-backend

# Build your docker image
$ docker build -t candlestick-app/backend .

# Run your docker image with tag name
$ docker run -p 8080:8080 candlestick-app/backend

# Navigate to http://localhost:8080/api/v1/markets_details
```

# API Endpoints
```
GET http://localhost:8080/api/v1/markets_details
GET http://localhost:8080/api/v1/candles?pair=B-BTC_USDT&interval=1m
GET http://localhost:8080/api/v1/order_book?pair=B-BTC_USDT
GET http://localhost:8080/api/v1/history?pair=B-BTC_USDT&limit=30
