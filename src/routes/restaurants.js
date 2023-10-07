const router = require('express').Router();

const testData = {
  1: { id: 1, name: 'Logan Kitchen' },
  2: { id: 2, name: 'Federales' },
};

router
  .route('/restaurants')
  .post(function (req, res, next) {
    console.log({ req });
    res.json(req.body).status(200).send();
  })
  .get(function (req, res, next) {
    res.json(testData);
    res.status(200).send();
  });
router.route('/restaurants/:id').get(function (req, res, next) {
  const id = req.params.id;
  if (id && testData[id]) {
    res.json(testData[id]);
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});
module.exports = router;
