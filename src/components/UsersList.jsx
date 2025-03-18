import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUser, setExpandedUser] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load users. Please try again.");
        setLoading(false);
      });
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const toggleExpand = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  if (loading) return <p className="loading">Loading users...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="users-section">
      <h2>Users</h2>

      <input
        type="text"
        placeholder="Search Users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="users-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`user-card ${
                expandedUser === user.id ? "expanded" : ""
              }`}
              onClick={() => toggleExpand(user.id)}
            >
              <h3>{user.name}</h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>

              {expandedUser === user.id && (
                <div className="user-details">
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Website:</strong> {user.website}
                  </p>
                  <p>
                    <strong>Address:</strong> {user.address.street},{" "}
                    {user.address.city}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No users found.</p>
        )}
      </div>
    </section>
  );
};

export default UsersList;
