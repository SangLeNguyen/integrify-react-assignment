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
    <Grid container spacing={16}>
        {
            users.map((user) =>{
              return(
                <React.Fragment key={user.id}>
                  <Grid item xs={12} sm={4}>
                <InfoCard 
                name = {user.name}
                username = {user.username}
                website = {user.website}
                id = {user.id}
                />
              </Grid>
              </React.Fragment>
              )
            }
            )
        }
    </Grid>
    )
};

export default Content;