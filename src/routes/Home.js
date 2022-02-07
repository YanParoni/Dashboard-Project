import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../services/company";
import Dashboard from "../components/Dashboard";
import { Paper } from "@material-ui/core";
import FormCard from "../components/FormCard";
import Title from "../components/Title";
import AddButon from "../components/AddButon";

function Home() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.list);
  useEffect(() => {
    if (companies.length === 0) {
      dispatch(getCompanies());
    }
  }, []);

  return (
    <>
      <Title />
      <Paper component='div' style={{ height: "100vh" }} elevation={20} >
        <FormCard title="Dash" form={<Dashboard />} additional={<AddButon/>} />
      </Paper>
    </>
  );
}

export default Home;
