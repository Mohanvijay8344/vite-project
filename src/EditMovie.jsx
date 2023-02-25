import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./global";


const formValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4).url(),
  summary: yup.string().required().min(20),
  rating: yup.number().required().min(0).max(10),
  trailer: yup.string().required().min(4).url(),
});

export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovieList] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  }, [id]);
  console.log(movie);

  return movie ? <EditMovieForm movie={movie} /> : <h1>Loading</h1>;
}

function EditMovieForm({ movie }) {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        summary: movie.summary,
        rating: movie.rating,
        trailer: movie.trailer,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updatedMovie) => {
        console.log("Form values", updatedMovie), addMovie(updatedMovie);
      },
    });

  const navigate = useNavigate();
  const addMovie = async (updatedMovie) => {
    console.log(updatedMovie);

    await fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/MovieList");
  };

  return (
    <form onSubmit={handleSubmit} className="addmovie">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.name}
        type="text"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />

      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.poster}
        type="link"
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />

      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.summary}
        type="text"
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        error={touched.summary && errors.summary}
        helperTex={touched.summary && errors.summary ? errors.email : null}
      />

      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.trailer}
        type="text"
        id="outlined-basic"
        label="trailer"
        variant="outlined"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.email : null}
      />

      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.rating}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />

      <Button
        type="submit"
        onSubmit={handleSubmit}
        variant="contained"
        color="success"
      >
        Save
      </Button>
    </form>
  );
}
