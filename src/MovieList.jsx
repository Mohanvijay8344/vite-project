import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "./global";


export function MovieList() {
  const getMovies = () => {
    fetch(`${API}/movies/`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  const [movieList, setMovieList] = useState([]);

  useEffect(() => getMovies(), []);

  const dltmv = async (id) => {
    console.log("delete Movie", id);
    await fetch(`${API}/movies/${id}`, { method: "DELETE" });
    getMovies();
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movieList.map((ml) => (
          <Movie
            key={ml.id}
            movie={ml}
            id={ml.id}
            deleteButton={
              <DeleteIcon
                className="delete"
                color="error"
                onClick={() => dltmv(ml.id)}
              >
                Delete
              </DeleteIcon>
            }
            editButton={
              <EditIcon
                className="delete"
                color="secondary"
                onClick={() => navigate(`/MovieList/edit/${ml.id}`)}
              >
                edit
              </EditIcon>
            }
          />
        ))}
      </div>
    </div>
  );
}
