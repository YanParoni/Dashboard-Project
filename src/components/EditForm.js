import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { edit } from "../services/company";
import { useNavigate } from "react-router-dom";
import { Paper, TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";


function EditForm() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.companies.selected);

  
  let history = useNavigate();
  const validationSchema = yup.object({
    name: yup
    .string("Edit name")
    .min(6, "Name should be of minimum 6 characters length")
    .required("Name is required"),
    email: yup
      .string("Edit email")
      .email("Enter a valid email")
      .required("Email is required"),
    })   
  const formik = useFormik({
    initialValues: {
      name: selected?.name,
      email: selected?.email,
      id:selected?.id
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(edit(values));
      history('/',{replace:true})
      ;
    },
  });
  return (
    <Paper>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          type="name"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
         <TextField
          id="email"
          name="email"
          label="Email"
          type="email"

          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button fullWidth  type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default EditForm;
