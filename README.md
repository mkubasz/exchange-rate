# Exchange Rate API


## The API

```
GET /exchange-rate
```

```
$ curl localhost:8080/exchange-rate?from=USD&to=EUR
```

On success, the endpoint should return a JSON structure like the following:

```json
{
  "from": "USD",
  "to": "EUR",
  "rate": 0.90,
  "timestamp": 1558564613185
}
```

A stubbed API endpoint has already been provided for you so that you can focus on the main goal.
#### Federal SwingDev Institute
Example, self-descriptive Federal SwingDev Institute API request:
```
GET https://federal-institute.sandbox.swing.dev/rates/?base=EUR&target=PLN
```

Example Federal SwingDev Institute API response:
```
{"base":"EUR","rate":4.49,"target":"PLN","timestamp":1612534746}
```
#### Swing Exchange Central
Example Swing Exchange Central API request:
```
curl 'https://central-bank.sandbox.swing.dev/exchange/v1/' \
-X 'GET' \
-H 'X-APIKEY: SWING'
```

Example Swing Exchange Central API response:
```
{"PLN":{"price":3.722},"SWD":{"price":9953},"EUR":{"price":0.858},"time":1612535376}
```

## How to run

```
$ npm run start:watch
```

[Jest](https://jestjs.io) testing framework and [SuperTest](https://github.com/visionmedia/supertest) have been configured if you wish to leverage any automatic testing while working on your implementation.

Tests can be run with:

```
$ npm run test
```
