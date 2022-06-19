const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Id already Prasent"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email!");
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10
    },
    address: {
        type: String,
        required: true
    }
});

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;