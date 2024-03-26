import { connectToDB } from "@utils/database";
import Resume from "@models/resume";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const resumes = await Resume.find({ creator: params.id }).populate("creator");

    return new Response(JSON.stringify(resumes), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all resumes", { status: 500 });
  }
}