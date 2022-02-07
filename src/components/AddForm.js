import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../services/company";
import { useNavigate } from "react-router-dom";
import { Paper, TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";


function AddForm(props) {
  let history = useNavigate();
  const companies = useSelector((state) => state.companies.list.length);
  console.log(companies);
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    name: yup
      .string("Edit name")
      .min(6, "Name should be of minimum 6 characters length")
      .required("Name is required"),
    email: yup
      .string("Edit email")
      .email("Enter a valid email")
      .required("Email is required"),
    username: yup
      .string("Enter Username")
      .required("Username is required")
      .min(4, "Username should be of minimum 4 characters length"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      id: companies + 1,
      address: {city:''},
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addUser(values));
      console.log(values)
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
        <TextField
          id="username"
          name="username"
          label="Username"
          type="username"
          fullWidth
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          id="address"
          name='address.city'
          label="Address"
          type="address"
          fullWidth
          value={formik.values.address.city}
          onChange={formik.handleChange}
         
        />
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default AddForm;
