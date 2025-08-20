import React from "react";
import { ClipLoader } from "react-spinners";

const SmallSpinner = () => {
  const override = {
    display: "block",
    borderColor: "white",
  };

  return (
    <ClipLoader
      cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default SmallSpinner;
