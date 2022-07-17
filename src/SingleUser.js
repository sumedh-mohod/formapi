import React, { useState, useEffect } from 'react';
import "./SingleUser.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleUser = () => {

  let userId = useParams();
  const [user, setUser] = useState([]);
  let link = "https://rickandmortyapi.com/api/character/" + userId.id
  useEffect(() => {
    axios.get(link).then((response) => {
      setUser(response.data);
      console.log("response", response.data);
    });
  }, []);

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center'>
      <div className="user_card">
        <p>Name: {user.name}</p>
        <p>Species: {user.species}</p>
        <p>Type: {user.type}</p>
        <p><img src={user.image} alt="img" /></p>
      </div>
    </div>
  )
}

export default SingleUser