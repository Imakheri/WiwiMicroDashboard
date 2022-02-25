const { Router } = require('express');
const database = require('./data.js')

const router = Router();

router.get('/', (req, res) => {
    
    let filter = database.db.map(el => el.fecha)
    let cortado = filter.map(el => el.slice(11,13))
    
    const count = {};

    for (const element of cortado) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    res.json(count)
})

module.exports = router;