const router = require('express').Router();
const db = require('../db.js');

router
  .route('/restaurants')
  .post(function (req, res, next) {
    const body = req.body;
    const { id, name, category_id, user_id, is_visited } = body;
    db.none(
      'INSERT INTO restaurants(id, name, category_id, user_id, is_visited) VALUES($1, $2, $3, $4, $5)',
      [id, name, category_id, user_id, is_visited]
    )
      .then(() => {
        //TODO: return id
        // res.json(dbResult);
        res.status(201).send();
      })
      .catch((error) => {
        console.log({ error });
        //TODO: is 500 best here?
        res.status(500).send();
      });
  })
  .get(function (req, res, next) {
    db.any('SELECT * FROM restaurants')
      .then((data) => {
        console.log({ data });
        res.json(data);
        res.status(200).send();
      })
      .catch((error) => {
        console.log({ error });
        //TODO: is 500 best here?
        res.status(500).send();
      });
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
