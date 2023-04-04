const connect = require("./src/connection/connection")
connect()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const GalleryModel = require("./src/model/galleryModel")
const GalleryRoute = require("./src/routes/galleryRoutes")
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
// const secret = "AKHILNA";




const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.use("/api/v1/",GalleryRoute)


app.get("*", (req, res) =>{
    res.status(404).send("This is not a proper request")
});

app.listen(5000, () =>{
    console.log("server is running on port 5000")
})