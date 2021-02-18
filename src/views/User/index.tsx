import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/slices/user";
import { RootState } from "../../store";

import ItemList from "../../components/ItemList";

interface Params {
  id: string;
}

export default function User(props: any) {
  const dispatch = useDispatch();
  const params: Params = useParams();
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    dispatch(getUser(params.id));
  }, [dispatch, params.id]);
  return (
    <div>
      <h1>User Overview for {user.name}</h1>
      <h2>User Team(s)</h2>
      <ItemList
        items={user.teamId.map((id) => ({ name: `Team ID: ${id}`, id }))}
        itemType="teams"
      />
    </div>
  );
}
