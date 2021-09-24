import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    title:{
        fontSize: 14
    },
    pos: {
        marginBottom:12
    }
});

const InfoCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
            <Typography variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.username}
            </Typography>
            <Typography variant="body2">
                <a href="{props.website}">{props.website}</a>
            </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="medium">MORE DETAILS</Button>
            </CardActions>
        </Card>
    
  )};
  
  export default InfoCard;