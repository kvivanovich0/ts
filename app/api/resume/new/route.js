import { connectToDB } from "@utils/database";
import Resume from "@models/resume";

export const POST = async (req) => {
  const { userId, job, education, city, about } = await req.json();

  try {
    await connectToDB();
    const newResume = new Resume({
      creator: userId,
      job,
      education,
      city,
      about,
    })

    await newResume.save();

    return new Response(JSON.stringify(newResume), { status: 201 })
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new resume", { status: 500 })
  }
}