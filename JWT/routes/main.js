const {Router} = require('express');
const {loginUser,greetUser} = require('../controllers/main');
const auth = require('../middleware/auth');
const router = Router();


router.post("/",loginUser);
router.get("/user",auth,greetUser);

module.exports = router;