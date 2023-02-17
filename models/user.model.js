import { require } from "../dep.js";

const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  full_name: { type: String, required: true },
  personal_email: { type: String, required: true },
  dob: { type: Date, required: true },
  sex: { type: String, required: true },
  blood_group: { type: String },
  emergency_contact_number: { type: Number, required: true },
  present_address: { type: String, required: true },
  permanent_address: { type: String, required: true },
  residential_contact_number: { type: Number, required: true },
  hobbies: { type: String, required: false },
  native_place: { type: String, required: true },
  pan_number: { type: String, required: true },
  passport_number: { type: String, required: false },
  aadhar_number: { type: Number, required: true },
  mother_tongue: { type: String, required: true },
  maritial_status: { type: String, required: true },
  mobile_no: { type: Number, required: true },
  father_name: { type: String, require: true },
  father_dob: { type: Date, required: true },
  mother_name: { type: String, required: true },
  mother_dob: { type: Date, required: true },
  primary_skills: [{ type: String, required: true }],
  secondery_skills: [{ type: String, required: true }],
  designation: { type: String, required: true },
  //   hr_reporting_name : {type : }
});
