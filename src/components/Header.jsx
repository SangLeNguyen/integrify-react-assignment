import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  abRoot: {
    backgroundColor: "#4d83de",
  },
  abStatic: {
    border: "light blue 3px",
    marginBottom: 50,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={[classes.abStatic, classes.abRoot]} position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>INTEGRIFY</Typography>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
