const userModel = require("../../db/models/courseSchema.js")

const addCourse = async (req, res) => {
    console.log(req.user)
    const { name, imageUrl, universityName, facultyProfile, learningHoursAndDuration, price, certificateDiploma, eligibilityCriteria } = req.body
    if (!name || !imageUrl || !universityName || !facultyProfile || !learningHoursAndDuration || !price || !certificateDiploma || !eligibilityCriteria)
        return res.send({ "message": "All fields are required", "status": 400 })
    try {

        const doc = new userModel({
            name: name,
            imageUrl: imageUrl,
            universityName: universityName,
            facultyProfile: facultyProfile,
            learningHoursAndDuration: learningHoursAndDuration,
            price: price,
            certificateDiploma: certificateDiploma,
            eligibilityCriteria: eligibilityCriteria,

        })
        await doc.save()
        res.send({
            "message": `${name} is added successfully!`, "status": 200,
            "data": {
                "Name": `${name}`,
                "imageUrl": `${imageUrl}`,
                "universityName": `${universityName}`
            }
        })
    } catch (error) {
        console.log(error)
        res.send({ "message": "Unable to add course", "status": 403 })
    }
}

const updateCourse = async (req, res) => {
    const { name, imageUrl, universityName, facultyProfile, learningHoursAndDuration, price, certificateDiploma, eligibilityCriteria } = req.body
    try {
        await userModel.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                name: name,
                imageUrl: imageUrl,
                universityName: universityName,
                facultyProfile: facultyProfile,
                learningHoursAndDuration: learningHoursAndDuration,
                price: price,
                certificateDiploma: certificateDiploma,
                eligibilityCriteria: eligibilityCriteria,
            }
        })
    } catch (error) {
        console.log(error)
        res.send({ "message": "Unable to update course", "status": 403 })
    }


}

const deleteCourse = async (req, res) => {
    try {
        await userModel.deleteOne(req.params.id)
        res.send({message: "user deleted successfully!"});
    } catch (error) {
        console.log(error)
        res.send({ "message": "Unable to update course", "status": 403 })
    }
}

const getAllCourse = async (req, res) => {
    try {
       const data = await userModel.find()
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send({ "message": "Unable to get course", "status": 403 })
    }
}

const getOneCourse = async (req, res) => {
    try {
       const data = await userModel.findById(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send({ "message": "Unable to get course", "status": 403 })
    }
}



module.exports = { addCourse, updateCourse, deleteCourse, getAllCourse, getOneCourse }