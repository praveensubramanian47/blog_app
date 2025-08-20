import React, { useState } from "react";
import Header from "../ui_components/Header";
import BlogContainer from "../ui_components/BlogContainer";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getBlogs } from "@/services/apiBlog";
import Spinner from "../ui_components/Spinner";
import PagePagination from "../ui_components/PagePagination";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const numOfBlogPerPage = 3;
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["blogs", page],
    queryFn: () => getBlogs(page),
    placeholderData: keepPreviousData,
  });

  const blogs = data?.results || [];
  const numOfPages = Math.ceil(data?.count / numOfBlogPerPage);

  function handleSetPage(val) {
    setPage(val);
  }

  function increasePageVal() {
    setPage(page + 1);
  }

  function decreasePageVal() {
    setPage(page - 1);
  }

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <BlogContainer blogs={blogs} />
      <PagePagination
        increasePageVal={increasePageVal}
        decreasePageVal={decreasePageVal}
        numOfPages={numOfPages}
        handleSetPage={handleSetPage}
        page={page}
      />
    </>
  );
};

export default HomePage;
