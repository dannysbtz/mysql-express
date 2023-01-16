const express = require("express");
const controllerLinks = require("../controllers/controllerLinks");
const ControllerList=require('../controllers/controllerLinks');
const router=express.Router();

router.get('/',ControllerList.showAll);
router.route("/add")
    .get(ControllerList.add)
    .post(ControllerList.create);
router.route('/:id')
    .get(controllerLinks.show)
    .delete(controllerLinks.remove)
    .put(controllerLinks.edit);
module.exports=router;