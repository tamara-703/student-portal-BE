const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const studentSchema = new Schema(
  {
        name: {type: String},
        major: {type: String},
        program: {type: String},
        graduationYear: {type: Number},
        yearsCompleted: {type: Number},
        phone: {type: String, max: 10, min: 3},
        email: String,
        courses: String
  },
  {
    timestamps: true,
  }
);

const Student = model("Student", studentSchema);

module.exports = Student;
