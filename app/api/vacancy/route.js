import Vacancy from "@models/vacancy";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const vacancies = await Vacancy.find({}).populate("creator");

    return new Response(JSON.stringify(vacancies), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all vacancies", { status: 500 });
  }
}