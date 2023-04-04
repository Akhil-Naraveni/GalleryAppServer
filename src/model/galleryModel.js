const mongoose = require("mongoose")
const objectId = require("mongoose").ObjectId

const gallerySchema = new mongoose.Schema({
    label : {type : String, required : true},
    url : {type : String, required : true},
},{timestamps : true})

const Gallery = mongoose.model("gallery", gallerySchema);

module.exports = Gallery;