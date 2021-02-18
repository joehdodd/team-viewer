import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slices/users";
import { RootState } from "../../store";

import ItemList from "../../components/ItemList";

export default function Users(props: any) {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  useEffect(() => {
    const teamId = null;
    dispatch(getUsers(teamId));
  }, [dispatch]);
  return (
    <div>
      <h1>Users</h1>
      <ItemList items={users} itemType="users"/>
    </div>
  );
}
