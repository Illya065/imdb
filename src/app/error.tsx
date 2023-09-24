"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: any) => {
  useEffect(() => {
    console.log("🚀 ~ file: error.tsx:8 ~ useEffect ~ error:", error);
  }, [error]);

  return (
    <div className="text-center mt-10 ">
      <h1>Something Went Wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
