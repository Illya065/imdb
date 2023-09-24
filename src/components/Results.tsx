import React from "react";

const Results = ({ results }: any) => {
  return (
    <div>
      {results.map((result: any) => {
        return <div key={result.id}>{result.original_title}</div>;
      })}
    </div>
  );
};

export default Results;
