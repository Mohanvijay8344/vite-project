import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


export function MovieList() {

  const getMovies = () => {
    fetch("https://63d75fbcafbba6b7c93beb74.mockapi.io/movies/", {method: "GET"})
    .then((data) => data.json())
    .then((mvs)=> setMovieList(mvs))
  }
  
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>getMovies(),[])

    const dltmv = async (id) => {
      console.log("delete Movie", id);
    await fetch(`https://63d75fbcafbba6b7c93beb74.mockapi.io/movies/${id}`, {method:"DELETE"})
    getMovies();
    };

    return (
    <div>
      <div className="movie-list">
        {movieList.map((ml) => (
          <Movie key={ml.id} movie={ml} id={ml.id}
          deleteButton = {<DeleteIcon className="delete" color="error" onClick={()=>dltmv(ml.id)}>Delete</DeleteIcon>} />
        ))}
      </div>
    </div>
  );
}
