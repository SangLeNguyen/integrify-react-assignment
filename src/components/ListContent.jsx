import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
      textAlign: 'center',
      marginTop: 10
  }
});

const ListContent = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const classes = useStyles();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  if (!user.length) {
    return <div>Loading...</div>;
  }

  return (
    <Card className={classes.root}>
    
        {user.map((detail, index) => (
          <dl key={index}>
            <dt>
              <b>Name:</b> {detail.name}
            </dt>
            <dt>
              <b>Username:</b> {detail.username}
            </dt>
            <dt>
              <b>Email:</b> {detail.email}
            </dt>
            <dt>
              <b>Phone:</b> {detail.phone}
            </dt>
            <dt>
              <b>Company:</b> {detail.company.name}
            </dt>
            <dt>
              <b>Website:</b> {detail.website}{" "}
            </dt>

            <dt>
              <b>Adress:</b>
            </dt>
            <ul>
              <li>
                <dd>
                  <b>street:</b> {detail.address.street}
                </dd>
              </li>
              <li>
                <dd>
                  <b>suite: </b>
                  {detail.address.suite}
                </dd>
              </li>
              <li>
                <dd>
                  <b>city: </b>
                  {detail.address.city}
                </dd>
              </li>
              <li>
                <dd>
                  <b>zipcode:</b>
                  {detail.address.zipcode}
                </dd>
              </li>
            </ul>
          </dl>
        ))}
            
    </Card>
    
  );
};

export default ListContent;
