"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import VacancyForm from "@components/VacancyForm";


const EditVacancy = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const vacancyId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    job: "",
    city: "",
    salary: "",
    employment: "",
    about: "",
  });
  
  useEffect(() => {
    const getVacancyDetails = async () => {
      const response = await fetch(`/api/vacancy/${vacancyId}`);
      const data = await response.json();

      setPost({
        job: data.job,
        city: data.city,
        salary: data.salary,
        employment: data.employment,
        about: data.about,
      });
    }

    if(vacancyId) getVacancyDetails();
  }, [vacancyId]);

  const updateVacancy = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!vacancyId) return alert("Vacancy ID not found");

    try {
      const response = await fetch(`/api/vacancy/${Id}`, {
        method: "PATCH",
        body: JSON.stringify({
          job: post.job,
          city: post.city,
          salary: post.salary,
          employment: post.employment,
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
    <VacancyForm
      type="Изменить"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateVacancy}
    />
  );
};

export default EditVacancy;
