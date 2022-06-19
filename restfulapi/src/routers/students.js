const express = require("express");
const Student = require("../models/students");
const router = new express.Router();
// router.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const userCreated = await user.save();
        res.status(201).send(userCreated);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/students", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData);
    } catch (error) {
        res.send(error);
    }
});
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData);
        res.send(studentData);
    } catch (error) {
        res.send(error);
    }
})


router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateInfo = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateInfo);
    } catch (error) {
        res.status(400).send(updateInfo)
    }
});


router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;