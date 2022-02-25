const { Router } = require('express');
const dateRoute = require('./Date.js');
const allRoute = require('./All.js');
const nodesRoute = require('./Node.js');
const nodeRoute = require('./PieNode.js');

const router = Router();

router.use('/', allRoute);
router.use('/date', dateRoute);
router.use('/nodes', nodesRoute);
router.use('/node', nodeRoute);


module.exports = router;