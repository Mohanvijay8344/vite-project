import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  

const navigate = useNavigate();

const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      summary: summary,
      rating: rating,
      trailer: trailer,
    };
    console.log(newMovie);

  fetch("https://63d75fbcafbba6b7c93beb74.mockapi.io/movies/", {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers:{
      "Content-Type": "application/json",
    }
  })
  .then((data) => data.json())
  .then((mvs)=> setMovieList(mvs));
  navigate('/');
}


  return (
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
        onChange={(event) => setTrailer(event.target.value)}
        type="text"
        id="outlined-basic"
        label="trailer"
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
        onClick={addMovie}
        variant="contained"
      >
        Add Movie
      </Button>
    </div>
  );
}

