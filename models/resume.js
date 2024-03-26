import mongoose, { Schema, model, models } from "mongoose";

const ResumeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  job: {
    type: String,
    required: [true, 'Job name is required.']
  },
  education: {
    type: String,
    required: [true, 'Education is required.']
  },
  city: {
    type: String,
    required: [true, 'City is required.']
  },
  about: {
    type: String,
    required: [true, 'About is required.']
  },
});

const Resume = models.Resume || model("Resume", ResumeSchema);

export default Resume;