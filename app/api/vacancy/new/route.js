import { connectToDB } from "@utils/database";
import Vacancy from "@models/vacancy";

export const POST = async (req) => {
  const { userId, job, city, salary, employment, about } = await req.json();

  try {
    await connectToDB();
    const newVacancy = new Vacancy({
      creator: userId,
      job,
      city,
      salary,
      employment,
      about,
    })

    await newVacancy.save();

    return new Response(JSON.stringify(newVacancy), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new resume", { status: 500 });
  }
}