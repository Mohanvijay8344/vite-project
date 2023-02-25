import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().required("Why not fill this email").min(12, "Need a Bigger Email"),
  password: yup.string().required("Why not fill this password").min(8, "Need a Bigger password").max(11),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues:{
        email: 'mohanvijay83', 
        password: '1234567'},
    // validationSchema: formValidationSchema,
    // onSubmit: (values) => console.log("Form values", values),  
  }
);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        name="email" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        values={formik.values.email} 
        type="email" 
        placeholder="Username" 
        />
      {formik.touched.email & formik.errors.email ? formik.errors.email : null}
      
      <input 
      name="password" 
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur} 
      values={formik.values.password} 
      type="text" 
      placeholder="Password" 
      />
      {formik.touched.password & formik.errors.password ? formik.errors.password : null}
      
      <button type="submit">Submit</button>
    </form>
    
  );
}
