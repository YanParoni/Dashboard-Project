import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
import { getById } from "../services/company";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";
import { makeStyles } from '@material-ui/styles';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
const col = ["ID", "Name", "Username", "Email", "Address", "Edit", "Delete"];

const useStyles = makeStyles((theme) => ({
  cell: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor:  theme.palette.action.hover,
    },
  },
}));
const Dashboard = () => {
  const companies = useSelector((state) => state.companies.list);
  let rows = [];
  const [columns, setColumns] = useState();
  const [row, setRow] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    rows = companies.map((item) => item);
    setColumns(col);
    setRow(rows);
  }, [companies]);

  const dispatch = useDispatch();
  function handleChange(value) {
    dispatch(getById(value));
  }
  return (
    <>
      <TableContainer sx={{ margin: 50 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              {columns !== undefined &&
                columns.map((item) => (
                  <TableCell key={item} align="left">
                    {item}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row !== undefined &&
              row.map((row) => (
                <TableRow
                  className={classes.cell}
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell  align="left">
                    {row.id}
                  </TableCell>
                  <TableCell  align="left">
                    {row.name}
                  </TableCell>
                  <TableCell  align="left">
                    {row.username}
                  </TableCell>
                  <TableCell  align="left">
                    {row.email}
                  </TableCell>
                  <TableCell  align="left">
                    {row.address.city}
                  </TableCell>
                  <TableCell  align="left">
                    <Link
                      to={`/edit/${row.id}`}
                      style={{ textDecoration: "none" }}
                    > <IconButton
                    onClick={() => handleChange(row.id)}
                    size="large"
                    edge="left"
                    sx={{ mr: 2 }}
                  >
                    < ModeEditOutlinedIcon />
                  </IconButton>
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <DeleteModal id={row.id} name={row.name} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Dashboard;
