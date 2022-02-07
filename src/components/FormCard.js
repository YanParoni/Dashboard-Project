import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cell: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor:  theme.palette.action.hover,
    },
  },
}));
function FormCard(props) {
  const classes=useStyles();
  return (
    <Grid container spacing={2} justifyContent="center" alignContent="center"sx={{margin:100}}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid item xs={8}>
              <Typography  gutterBottom variant="h3" >
                {props.title}
              </Typography>
              {props.additional}

            </Grid>
            <Grid item xs={10}>
              <Typography component='div' variant="body2" color="textSecondary" >
                {props.form}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FormCard;
