const express = require('express');
const expressOasGenerator = require('express-oas-generator');
const restaurants = require('./routes/restaurants');

const app = express();

expressOasGenerator.handleResponses(app, {});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', restaurants);

expressOasGenerator.handleRequests();

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
