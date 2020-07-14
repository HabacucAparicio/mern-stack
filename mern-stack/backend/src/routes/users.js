const { Router } = require('express');
const router = Router();
const {getUsers,createUsers,deleteUsers} = require("../controllers/users_controllers");


router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')
    //.get()
    //.put()
    .delete(deleteUsers)
    
module.exports = router;