import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MovieForm } from "../components/MovieForm";
import { MovieList } from "../components/MovieList";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { db, auth } from "../config/firebase";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

export const MovieDashboardPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();
  }, [moviesCollectionRef]);

  const onSubmitMovie = async () => {
    try {
      if (isEditing) {
        const movieDoc = doc(db, "movies", currentMovieId);
        await updateDoc(movieDoc, {
          title: newMovieTitle,
          releaseDate: newReleaseDate,
          receivedAnyOscar: isNewMovieOscar,
        });
        setIsEditing(false);
      } else {
        await addDoc(moviesCollectionRef, {
          title: newMovieTitle,
          releaseDate: newReleaseDate,
          receivedAnyOscar: isNewMovieOscar,
          userId: auth?.currentUser?.uid,
        });
      }
      setNewMovieTitle("");
      setNewReleaseDate(0);
      setIsNewMovieOscar(false);
    } catch (err) {
      console.error(err);
    }
  };

  const editMovie = (movie) => {
    setNewMovieTitle(movie.title);
    setNewReleaseDate(movie.releaseDate);
    setIsNewMovieOscar(movie.receivedAnyOscar);
    setIsEditing(true);
    setCurrentMovieId(movie.id);
  };

  const deleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await deleteDoc(movieDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signup'); // Redirect to the signup page after logging out
    } catch (err) {
      console.error("Error during sign-out:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 relative">
      <div className="absolute top-4 right-4">
        <div className="relative">
          <i
            className="bi bi-person-circle text-3xl cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          ></i>
          {showProfileMenu && (
            <div className="absolute right-0 top-10 w-40 bg-white shadow-lg rounded-md">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
      <MovieForm
        isEditing={isEditing}
        newMovieTitle={newMovieTitle}
        newReleaseDate={newReleaseDate}
        isNewMovieOscar={isNewMovieOscar}
        setNewMovieTitle={setNewMovieTitle}
        setNewReleaseDate={setNewReleaseDate}
        setIsNewMovieOscar={setIsNewMovieOscar}
        onSubmitMovie={onSubmitMovie}
      />
      <MovieList movieList={movieList} editMovie={editMovie} deleteMovie={deleteMovie} />
    </div>
  );
};


