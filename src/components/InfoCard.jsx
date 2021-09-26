import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight: 335,
    textAlign: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const InfoCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Avatar style={{ height: "110px", width: "110px" }}>
          {props.name[0]}
        </Avatar>
      </Box>
      <CardContent>
        <Typography variant="h6" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
          @{props.username}
        </Typography>
        <Typography variant="body2">
          <a href="http://{props.website}">http://{props.website}</a>
        </Typography>
      </CardContent>

      <CardActions>
        <Link to={`/${props.id}`}>
          <Button
            style={{ marginLeft: "auto", marginRight: "auto" }}
            variant="contained"
            size="medium"
          >
            MORE DETAILS
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
