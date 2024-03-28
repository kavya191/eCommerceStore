import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/users"
        );
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading users...</p>}
      {error && <p>Error fetching users: {error.message}</p>}
      <h1 className="text-center mt-3">List of Users</h1>
      <Table className="shadow p-5 mb-5 container stripped borered mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((i, index) => (
              <tr>
                <td>{index}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>
                  <img src={i.avatar} style={{ height: "70px",width:"70px" }}></img>
                </td>
              </tr>
            ))
          ) : (
            <h2>No user Found</h2>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
