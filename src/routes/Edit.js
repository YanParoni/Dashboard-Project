import React from "react";
import Title from "../components/Title";
import EditForm from "../components/EditForm";
import FormCard from "../components/FormCard";
import { Paper } from "@material-ui/core";
function Edit() {

  return (
    <>
      <Paper  style={{ height: "100vh" }}>
        <Title home />
        <FormCard title="Edit a User" form={<EditForm />} />
      </Paper>
    </>
  );
}

export default Edit;
