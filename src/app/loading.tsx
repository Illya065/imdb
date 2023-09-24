import React from "react";

const Loading = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-8 h-8 border-t-4 border-r-4 border-amber-600 rounded-full bg-transparent animate-spin" />
    </section>
  );
};

export default Loading;
