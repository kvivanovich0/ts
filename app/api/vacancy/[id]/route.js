import { connectToDB } from "@utils/database";
import Vacancy from "@models/vacancy";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const vacancy = await vacancy.findById(params.id).populate("creator");
    if(!vacancy) return new Response("Vacancy not found", { status: 404 });

    return new Response(JSON.stringify(vacancy), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all vacancies", { status: 500 });
  }
}

export const PATCH = async (request, { params }) => {
  const { job, city, salary, employment, about } = await request.json();

  try {
    await connectToDB();

    const existingVacancy = await Vacancy.findById(params.id);

    if(!existingVacancy) {
      return new Response("Vacancy not found", { status: 404 });
    }

    existingVacancy.job = job;
    existingVacancy.city = city;
    existingVacancy.salary = salary;
    existingVacancy.employment = employment;
    existingVacancy.about = about;

    await existingVacancy.save();

    return new Response(JSON.stringify(existingVacancy), { status: 200 });
  } catch (error) {
    return new Response("Failed to update vacancy", { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the vacancy by ID and delete it
    await Vacancy.findByIdAndDelete(params.id);

    return new Response("Vacancy deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error deleting vacancy", { status: 500 });
  }
};