import React, { useState, useEffect } from "react";
import "./AllUser.css";
import axios from "axios";
import { Link, useParams  } from "react-router-dom";

const AllUser = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character").then((response) => {
        setData(response.data);
      });
    }, []);
  
    if (!data) return null;
  return (
    <>
    <div className="container p-5">
        <h3>All Users Data</h3>
        <table
        id="example"
        className="display table table-bordered table-striped"
        cellSpacing="0"
        width="90%"
      >
        <thead>
          <tr>
            <th className="th">Id</th>
            <th className="th">Name</th>
            <th className="th">Spacies</th>
            <th className="th">Type</th>
            <th className="th">Image</th>
          </tr>
        </thead>
        <tbody>
      {data.results.map((e) => {
        return (
            <tr key={e.id}>
            <td>{e.id}</td>
            <td><Link to={"/single-user/"+e.id}>{e.name}</Link></td>
            <td>{e.species}</td>
            <td>{e.type}</td>
            <td><img src={e.image}></img></td>
          </tr>
        )
      })}
        </tbody>
      </table>
    </div>
    </>);
};

export default AllUser;
