import React from "react";
import Title from "../components/Title";
import FormCard from "../components/FormCard";
import AddForm from "../components/AddForm";
import { Paper } from "@material-ui/core";

function Add() {
  return (
    <>
    <Paper style={{ height: "100vh" }}>
      <Title  home/>
      <FormCard title='Add a user' form={<AddForm/>}/>
      </Paper>
    </>
  );
}

export default Add;
