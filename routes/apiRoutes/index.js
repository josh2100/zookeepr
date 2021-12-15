const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes");
/// self actualization
const zookeeperRoutes = require("../apiRoutes/zookeeperRoutes");

router.use(animalRoutes);

router.use(zookeeperRoutes);

module.exports = router;
