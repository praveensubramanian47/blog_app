import React from "react";
import pic from "../images/pic.png";
import { BASE_URL } from "@/api";
import { formatDate } from "@/services/FormatDate";

const CardFooter = ({ blog }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img src={pic} alt="author profile" />
        </div>
        <small className="text-[#97989F] text-[12px] font-semibold">
          {blog.author.first_name}
          {blog.author.last_name}
        </small>
      </span>

      <small className="text-[#97989F] text-[12px] font-semibold ml-3">
        {formatDate(blog.published_date)}
      </small>
    </div>
  );
};

export default CardFooter;
