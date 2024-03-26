"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditResume = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resumeId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    job: "",
    education: "",
    city: "",
    about: "",
  });
  
  useEffect(() => {
    const getResumeDetails = async () => {
      const response = await fetch(`/api/resume/${resumeId}`);
      const data = await response.json();

      setPost({
        job: data.job,
        education: data.education,
        city: data.city,
        about: data.about,
      });
    }

    if(resumeId) getResumeDetails();
  }, [resumeId]);

  const updateResume = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!resumeId) return alert("Resume ID not found");

    try {
      const response = await fetch(`/api/resume/${resumeId}`, {
        method: "PATCH",
        body: JSON.stringify({
          job: post.job,
          education: post.education,
          city: post.city,
          about: post.about,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Изменить"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateResume}
    />
  );
};

export default EditResume;
