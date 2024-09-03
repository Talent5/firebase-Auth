import React from "react";

export const MovieForm = ({
  isEditing,
  newMovieTitle,
  newReleaseDate,
  isNewMovieOscar,
  setNewMovieTitle,
  setNewReleaseDate,
  setIsNewMovieOscar,
  onSubmitMovie,
}) => {
  return (
    <div className="w-full max-w-md mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
        {isEditing ? "Edit Movie" : "Add a New Movie"}
      </h2>
      <div className="space-y-4">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Movie title"
          value={newMovieTitle}
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Release Date"
          type="number"
          value={newReleaseDate}
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded focus:ring-blue-500"
            checked={isNewMovieOscar}
            onChange={(e) => setIsNewMovieOscar(e.target.checked)}
          />
          <label className="ml-2 text-gray-700">Received an Oscar</label>
        </div>
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        onClick={onSubmitMovie}
      >
        {isEditing ? "Update Movie" : "Add Movie"}
      </button>
    </div>
  );
};
