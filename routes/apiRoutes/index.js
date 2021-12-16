const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes");
/// changed from recommended
const zookeeperRoutes = require("../apiRoutes/zookeeperRoutes");
router.use(zookeeperRoutes);

router.use(animalRoutes);

module.exports = router;
