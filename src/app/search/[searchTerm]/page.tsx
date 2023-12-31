import Results from "@/components/Results";
import React from "react";

const SearchPage = async ({ params }: any) => {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const results = data?.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
