import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTeam } from "../../store/slices/team";
import { RootState } from "../../store";
import { getUsers } from "../../store/slices/users";

import ItemList from "../../components/ItemList";

interface Params {
  id: string;
}

export default function Team(props: any) {
  const dispatch = useDispatch();
  const params: Params = useParams();
  const team = useSelector((state: RootState) => state.team.team);
  const teamUsers = useSelector((state: RootState) => state.users.users);
  useEffect(() => {
    dispatch(getTeam(params.id));
    dispatch(getUsers(params.id));
  }, [dispatch, params.id]);
  return (
    <div>
      <h2>Team Overview for {team.name}</h2>
      <ItemList items={teamUsers} itemType="users" />
    </div>
  );
}
