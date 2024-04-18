import Spinner from "@/app/assets/icons/spinner";
import React, { useEffect } from "react";

const Loading = ({ loading }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10 flex justify-center items-center text-5xl">
      <Spinner />
    </div>
  );
};

export default Loading;
