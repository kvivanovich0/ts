import mongoose, { Schema, model, models } from "mongoose";

const VacancySchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  job: {
    type: String,
    required: [true, 'Job name is required.']
  },
  city: {
    type: String,
    required: [true, 'City is required.']
  },
  salary: {
    type: Number,
    minimum: 0,
    required: [true, 'Salary is required.']
  },
  employment: {
    type: String,
    required: [true, 'Type of employment is required.']
  },
  about: {
    type: String,
    required: [true, 'About is required.']
  },
});

const Vacancy = models.Vacancy || model("Vacancy", VacancySchema);

export default Vacancy;