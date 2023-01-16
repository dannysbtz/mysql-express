const express = require("express");
const ControllerIndex=require("../controllers/ControllerIndex");
const router=express.Router();
router.get('/',ControllerIndex.index);

module.exports=router;

