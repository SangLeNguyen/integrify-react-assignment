import React from 'react';
import {Grid} from "@material-ui/core";
import ListContent from './ListContent' 

function Details() {
  return (
    <Grid container direction = "column">
      
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <ListContent/>
        </Grid> 
      </Grid>
    </Grid>
  );
};

export default Details;