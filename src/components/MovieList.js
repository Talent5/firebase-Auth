import React from "react";

export const MovieList = ({ movieList, editMovie, deleteMovie }) => {
  return (
    <div className="w-full max-w-md mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Movie List</h2>
      <div className="space-y-4">
        {movieList.map((movie) => (
          <div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
            <h1
              className={`text-lg font-bold ${
                movie.receivedAnyOscar ? "text-green-500" : "text-red-500"
              }`}
            >
              {movie.title}
            </h1>
            <p className="text-gray-600">Release Date: {movie.releaseDate}</p>
            <div className="flex space-x-4 mt-2">
              <button
                className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition-colors"
                onClick={() => editMovie(movie)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
                onClick={() => deleteMovie(movie.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
