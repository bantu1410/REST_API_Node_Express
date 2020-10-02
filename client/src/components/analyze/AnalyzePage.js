import React from "react";
import { makeStyles, Typography } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
}))

const AnalyzePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3" className={classes.title}>
          Analyzer
        </Typography>
      </div>

    </>
  );
};

export default AnalyzePage;
