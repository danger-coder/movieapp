import React, { useEffect, useState } from "react";
import SingleMovie from "./components/SingleMovie";
const apiUrl = "http://www.omdbapi.com/?apikey=ac0fc655";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(movies);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setLoading(false);
    setMovies(data.Search);
  };
  // api key for omdb
  // ac0fc655
  useEffect(() => {
    searchMovies("Marvel");
  }, []);

  return (
    <div className="bg-[#020024] text-white mx-auto container">
      <div className="flex flex-col items-center pt-[20px] justify-center">
        <h1 className="text-[40px] font-bold cursor-pointer">Movie App</h1>

        <div className="my-[20px] h-[50px] w-[500px] bg-red-500 flex items-center ">
          <input
            className="w-full h-[100%] pl-[14px] outline-none placeholder:text-black text-black"
            placeholder="Search movie here...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="px-[25px] h-[100%]"
            onClick={() => searchMovies(searchTerm)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid py-[30px] xl:grid-cols-5 grid-cols-3 gap-[30px]">
        {loading ? (
          <>
            <p className="text-white">Loading</p>
          </>
        ) : (
          <>
            {movies?.length && movies.length > 0 ? (
              movies.map((movie, index) => (
                <SingleMovie
                  title={movie.Title}
                  image={movie.Poster}
                  Imdb={movie.imdbID}
                  key={index}
                />
              ))
            ) : (
              <>
                {" "}
                <p>These it no moviews</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
