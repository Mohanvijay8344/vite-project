import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";

export function MovieList({movieList,setMovieList}) {
  
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div>
      <div className="addmovie">
        <TextField
          onChange={(event) => setName(event.target.value)}
          type="text"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          type="link"
          id="outlined-basic"
          label="Poster"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          id="outlined-basic"
          label="Summary"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          type="number"
          id="outlined-basic"
          label="Rating"
          variant="outlined"
        />
        <Button
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              summary: summary,
              rating: rating,
            };
            setMovieList([...movieList, newMovie]);
          }}
          variant="contained"
        >
          Add Movie
        </Button>
      </div>

      <div className="movie-list">
        {movieList.map((ml, index) => (
          <Movie key={index} movie={ml} id={index} />
        ))}
      </div>
    </div>
  );
}
