const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const router_v1 = require('./src/routes/v1/index.route');
const { invalidEndpoint } = require('./src/middlewares/v1/common.middlewares');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})


app.use('/v1',router_v1);


// middleware to catch all invalid endpoints
app.use(invalidEndpoint);


/* Error handler middleware */
app.use((err, req, res, next) => {
  console.log('error');
  const statusCode = err.statusCode || 500;
  // console.error("helllo",err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});



app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
