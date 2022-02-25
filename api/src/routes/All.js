const { Router } = require('express');
const database = require('./data.js')

const router = Router();

router.get('/', (req, res) => {
    res.send(database.db)
})


module.exports = router;

