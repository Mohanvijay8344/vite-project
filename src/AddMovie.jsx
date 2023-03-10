import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global"

const formValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4).url(),
  summary: yup.string().required().min(20),
  rating: yup.number().required().min(0).max(10),
  trailer: yup.string().required().min(4).url(),
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");
  // const [trailer, setTrailer] = useState("");
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "hi",
        poster: "",
        summary: "raj",
        rating: "10",
        trailer: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newMovie) => {
        console.log("Form values", newMovie), addMovie(newMovie);
      },
    });
  const navigate = useNavigate();
  const addMovie = async (newMovie) => {
    console.log(newMovie);

    await fetch(`${API}/movies/`, {
      method: "POST",
      body: JSON.stringify(newMovie),
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

      <Button type="submit" onSubmit={handleSubmit} variant="contained">
        Add Movie
      </Button>
    </form>
  );
}
