const express = require("express");
const {addCourse,updateCourse,deleteCourse,getAllCourse,getOneCourse} = require('../modules/admin/addCourseContoller.js');
const checkUserAuth = require("../modules/authentication/authTokenCheck.js")
 
const router = express.Router();
//Public routes
router.post('/addCourse',checkUserAuth,addCourse);
router.put('/updateCourse/:id',checkUserAuth,updateCourse);
router.delete("/deleteCourse/:id",checkUserAuth,deleteCourse);
router.get("/getAllCourse",checkUserAuth,getAllCourse)
router.get("/getOneCourse/:id",checkUserAuth,getOneCourse)

module.exports = router