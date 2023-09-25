import Image from "next/image";
import React from "react";

const getMovie = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

const MoviePage = async ({ params }: any) => {
  const movieId = params.id;

  const movie = await getMovie(movieId);
  console.log("🚀 ~ file: page.tsx:14 ~ MoviePage ~ movie:", movie);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={
            `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` ||
            movie.poster_path
          }
          alt="Movie Poster"
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/500x300"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-3">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>{" "}
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
