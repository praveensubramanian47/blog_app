import React from "react";
import pic from "../images/pic.png";
import { formatDate } from "@/services/FormatDate";

function BlogWriter({ blog }) {
  return (
    <div className="flex items-center gap=4">
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={pic}
            alt="picture"
            className="c rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#696A75] text-[14px]">
          {`${blog.author.first_name}${blog.author.last_name}`}
        </small>
      </span>

      <small className="text-[#696A75] text-[14px] ml-3">
        {formatDate(blog.published_date)}
      </small>
    </div>
  );
}

export default BlogWriter;
