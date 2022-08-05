const mongoose =require("mongoose");

//defining schema

const courseSchema = new mongoose.Schema({
   
    name:{type:String,required:true,trim:true},
    imageUrl:{type:String,required:true,trim:true},
    universityName:{type:String,required:true,trim:true},
    facultyProfile:{type:String,trim:true},
    learningHoursAndDuration:{type:String,required:true,trim:true},
    price:{type:Number,required:true},
    certificateDiploma:{type:String},
    eligibilityCriteria:{type:String},

})


//model

const userModel = mongoose.model("course",courseSchema)
module.exports = userModel;