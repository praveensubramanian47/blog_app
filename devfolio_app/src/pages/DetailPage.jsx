import React from "react";
import Badge from "@/ui_components/Badge";
import BlogWriter from "@/ui_components/BlogWriter";
import banner from "../images/detailBanner.jpg";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "@/services/apiBlog";
import { BASE_URL } from "@/api";
import Spinner from "@/ui_components/Spinner";

const DetailPage = () => {
  const { slug } = useParams();

  const {
    isPending,
    data: blog,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs", slug],
    queryFn: () => getBlog(slug),
  });

  console.log("blog_details:-", blog);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className="padding-dx max-container py-9">
      <Badge blog={blog} />

      <div className="flex items-center justify-between">
        <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
          {blog.title}
        </h2>
      </div>

      <BlogWriter blog={blog} />

      <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
        <img
          src={`${BASE_URL}/${blog.featured_image}`}
          alt="banner"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
        {blog.content}
      </p>
    </div>
  );
};

export default DetailPage;
