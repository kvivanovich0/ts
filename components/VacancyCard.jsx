"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const VacancyCard = ({ post, handleEdit, handleDelete}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className="vacancy_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-roboto font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-roboto text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>
      </div>

      <div className="my-4">
        <p className="font-semibold text-xl text-gray-900">{post.job}</p>
        <p className="font-semibold text-xl text-gray-900">{post.salary} ₽</p>
        <p className="">{post.city}</p>
        <p className="">{post.employment}</p>
        <p className="text-gray-900">{post.about}</p>
      </div>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Редактировать
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Удалить
          </p>
        </div>
      )}
    </div>
  );
};

export default VacancyCard;