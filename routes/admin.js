const userController=require('../controllers/inventoryController');

const express=require('express');
const router=express.Router();

router.delete("/users/:id",userController.deleteUser);

router.get("/users", userController.getUser);

router.post("/users", userController.postUser);

module.exports = router;