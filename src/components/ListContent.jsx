import React, {useState, useEffect} from 'react';

const ListContent = (id) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?id=1')
    .then(response => response.json())
    .then(data =>{
        setUser(data)
    })
  })

  return (
        <table>
        <tbody>
        {
          user.map((detail,index) => 
           <dl key={index}>
             <dt><b>Name:</b> {detail.name}</dt>
             <dt><b>Username:</b> {detail.username}</dt>
             <dt><b>Email:</b> {detail.email}</dt>
             <dt><b>Phone:</b> {detail.phone}</dt>
             <dt><b>Company:</b> {detail.company.name}</dt>
             <dt><b>Website:</b> {detail.website} </dt>
                
             <dt><b>Adress:</b></dt>
             <ul>
                <li><dd><b>street:</b> {detail.address.street}</dd></li>
                <li><dd><b>suite: </b>{detail.address.suite}</dd></li>
                <li><dd><b>city:  </b>{detail.address.city}</dd></li>
                <li><dd><b>zipcode:</b>{detail.address.zipcode}</dd></li>
             </ul>
           </dl>
          )
        }
        </tbody>
      </table>
    )
};

export default ListContent;