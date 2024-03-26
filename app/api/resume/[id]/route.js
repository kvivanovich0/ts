import { connectToDB } from "@utils/database";
import Resume from "@models/resume";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const resume = await Resume.findById(params.id).populate("creator");
    if(!resume) return new Response("Resume not found", { status: 404 });

    return new Response(JSON.stringify(resume), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all resumes", { status: 500 });
  }
}

export const PATCH = async (request, { params }) => {
  const { job, education, city, about } = await request.json();

  try {
    await connectToDB();

    const existingResume = await Resume.findById(params.id);

    if(!existingResume) {
      return new Response("Resume not found", { status: 404 });
    }

    existingResume.job = job;
    existingResume.education = education;
    existingResume.city = city;
    existingResume.about = about;

    await existingResume.save();

    return new Response(JSON.stringify(existingResume), { status: 200 });
  } catch (error) {
    return new Response("Failed to update resume", { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the resume by ID and delete it
    await Resume.findByIdAndDelete(params.id);

    return new Response("Resume deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error deleting resume", { status: 500 });
  }
};