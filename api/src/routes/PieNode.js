const { Router } = require('express');
const database = require('./data.js')

const router = Router();

router.get('/', (req, res) => {
  let filtered = database.db.map(el => el.nodo)

  const count = {};
  let result = [];

for (const element of filtered) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

const results = Object.keys(count)
const values = Object.values(count)

for(let i = 0; i < values.length; i++){
  if(values[i] > 296){
    result.push(values[i])
  }
}
  result.sort(function(a, b){
    return b - a;
  })
    res.send(result)
})

module.exports = router;