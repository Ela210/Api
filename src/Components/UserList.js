import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState();
  const [err, setErr] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
      } catch (error) {
        setErr(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {err ? (
        <Spinner animation="border" />
      ) : (
        users && users.map((el) => <UserCard el={el} key={el.id} />)
      )}
    </div>
  );
};

export default UserList;
