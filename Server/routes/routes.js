const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/conts").get(controllers.conts);
router.route("/add_cont").post(controllers.add_cont);
router.route("/del_cont/:id").post(controllers.del_cont);

module.exports = router;
