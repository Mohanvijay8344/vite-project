import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id, deleteButton }) {
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red",
  };

  // Manage state || indipendent || Accelerator
  const [show, setShow] = useState(true);
  // Derived state || dependent || speedometer
  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // };
  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className="flex">
          <h2 className="movie-name">
            {movie.name}{" "}
            <IconButton
              aria-label="Toggle-summary"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              aria-label="info"
              onClick={() => navigate(`/movies/${id}`)}
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>

        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton}
      </CardActions>
    </Card>
  );
}
