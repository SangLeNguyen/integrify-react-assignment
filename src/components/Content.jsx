import React, {useState, useEffect} from 'react';
import InfoCard  from './InfoCard';
import {Grid} from "@mui/material"

const Content = () =>{
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
        setUsers(data)
    })
  })

  return (
    <Grid container spacing={4}>
        {
            users.map((user) =>
            <Grid item xs={12}>
            <InfoCard 
              name = {user.name}
              username = {user.username}
              website = {user.website}
            />
            </Grid>
            )
        }
    </Grid>
    )
};

export default Content;