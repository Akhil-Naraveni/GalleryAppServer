const mongoose = require("mongoose")
const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser");
const Gallery = require("../model/galleryModel")

router.use(express.json())
router.use(express.urlencoded({ extended: false }));

router.post("/gallery",async (req, res)=>{
    try {
        const data = req.body
        const gallerydata = await Gallery.create(data)
        res.status(201).json({
            status : "success",
            gallerydata
        })
    } catch (e) {
        res.status(400).json({
            status : "failed",
            messsage : e.message
        })
    }
})

router.get("/gallery",async (req, res)=>{
    try {
        const gallerydata = await Gallery.find({})
        res.status(200).json({
            status : "success",
            gallerydata
        })
    } catch (e) {
        res.status(404).json({
            status : "failed",
            messsage : e.message
        })
    }
})
router.delete("/gallery/:id",async (req, res)=>{
    try {
        const gallerydata = await Gallery.deleteOne({_id : req.params.id})
        res.status(200).json({
            status : "success",
            gallerydata
        })
    } catch (e) {
        res.status(404).json({
            status : "failed",
            messsage : e.message
        })
    }
})

router.get("/gallery/:id", async(req, res)=>{
    try{
        console.log(req.params.id)
        const search = `\^${req.params.id}`
        const photos = await Gallery.find({$and:[{label:{$regex:search}}]})
        res.status(200).json({
            status:"Success",
            data:photos
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})




module.exports = router