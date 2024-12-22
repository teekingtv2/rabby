import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  return (
    <div
      style={{
        height: "70vh",
        width: "70vw",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BounceLoader
        color="#00DBC2"
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
