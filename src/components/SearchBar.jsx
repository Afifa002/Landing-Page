import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/fetchUsers";
import _ from "lodash";

const SearchBar = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleSearch = _.debounce((query) => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, 300);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Users..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
