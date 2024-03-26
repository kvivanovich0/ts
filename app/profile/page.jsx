"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-resume?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Вы уверены что хотите удалить Ваше резюме?");
    if(hasConfirmed) {
      try {
        await fetch(`/api/resume/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="Мой профиль"
      desc="Добро пожаловать в Ваш профиль. Поделитесь вашей вакансией или резюме"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      myProfile={true}
    />
  );
};

export default MyProfile;