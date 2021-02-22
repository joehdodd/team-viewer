import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slices/users";
import { RootState } from "../../store";

import Search from "../../components/Search";
import ItemList from "../../components/ItemList";

import { filter } from "../../lib/filter";

import "./users.css";

export default function Users(props: any) {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState(users);
  useEffect(() => {
    const teamId = null;
    dispatch(getUsers(teamId));
  }, [dispatch]);
  useEffect(() => {
    const filteredUsers = filter(searchValue, users);
    setFilteredUsers(filteredUsers);
  }, [searchValue, users]);
  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  return (
    <div>
      <div className="users-overview-header">
        <h1>Users</h1>
        <Search
          searchValue={searchValue}
          onChange={handleChange}
          placeholder="Filter users..."
        />
      </div>
      <ItemList items={filteredUsers} itemType="users" />
    </div>
  );
}
