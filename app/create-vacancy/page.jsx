'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import VacancyForm from '@components/VacancyForm';

const CreateVacancy = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    job: '',
    city: '',
    salary: '',
    employment: '',
    about: '',
  });

  const createVacancy = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/vacancy/new", {
        method: "POST",
        body: JSON.stringify({
          job: post.job,
          userId: session?.user.id,
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
      type="Опубликовать"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createVacancy}
    />
  )
}

export default CreateVacancy;