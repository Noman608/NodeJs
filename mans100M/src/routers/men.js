const express = require("express");
const router = new express.Router();
const MenRanking = require("../models/mens");
//post data
router.post("/mens", async (req, res) => {
    try {
        const mensRecord = new MenRanking(req.body);
        console.log(req.body);
        const insertMens = await mensRecord.save();
        res.status(201).send(insertMens);

    } catch (error) {
        res.status(400).send(error);
    }
});


//get data
router.get("/mens", async (req, res) => {
    try {
        const getMensData = await MenRanking.find().sort({ "ranking": 1 });
        res.status(201).send(getMensData);

    } catch (error) {
        res.status(400).send(error);
    }
});

//get a perticular id
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const IDholder = await MenRanking.findById(_id);
        console.log(IDholder);
        res.send(IDholder);
    } catch (error) {
        res.send(error);
    }
})

//update a perticular id
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateInfo = await MenRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateInfo);
    } catch (error) {
        res.status(500).send(updateInfo)
    }
});

//delete id
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateInfo = await MenRanking.findByIdAndDelete(_id);
        res.send(updateInfo);
    } catch (error) {
        res.status(500).send(updateInfo)
    }
});
module.exports = router;