const { Router } = require('express');
const database = require('./data.js')

const router = Router();

router.get('/', (req, res) => {
  let filtered = database.db.map(el => el.nodo)

  const count = {};

for (const element of filtered) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

    res.send(count)
})

module.exports = router;