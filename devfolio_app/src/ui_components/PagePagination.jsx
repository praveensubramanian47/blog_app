import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PagePagination = ({
  increasePageVal,
  decreasePageVal,
  numOfPages,
  page,
  handleSetPage,
}) => {
  const numbers = Array.from({ length: numOfPages }, (_, i) => i + 1);

  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  console.log(numbers);

  return (
    <Pagination className="my-6 dark:text-white">
      <PaginationContent>
        {firstNumber === page || (
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={decreasePageVal} />
          </PaginationItem>
        )}

        {numbers.map((num) => (
          <PaginationItem key={num} onClick={() => handleSetPage(num)}>
            {num === page ? (
              <PaginationLink isActive>{num}</PaginationLink>
            ) : (
              <PaginationLink>{num}</PaginationLink>
            )}
          </PaginationItem>
        ))}

        {lastNumber === page || (
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={increasePageVal} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PagePagination;
