import { useParams } from "react-router-dom";
import { useState } from "react";
import { MovieList } from "./MovieList";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movie);
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="Pathaan | Official Trailer | Tamil Version | Shah Rukh Khan | Deepika Padukone | John Abraham"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="flex">
          <h2>{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}{" "}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button variant="contained" className="back" onClick={()=>navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}
