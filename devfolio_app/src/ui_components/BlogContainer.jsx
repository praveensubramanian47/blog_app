import React from "react";
import BlogCard from "./BlogCard";

const BlogContainer = ({ blogs }) => {
  return (
    <section className="padding-x py-6 max-container">
      <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
        Latest Blogs
      </h2>

      <div className="flex items-center justify-center gap-8 flex-wrap">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogContainer;
