const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const restaurants = require('./routes/restaurants');

app.use('/api', restaurants);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
