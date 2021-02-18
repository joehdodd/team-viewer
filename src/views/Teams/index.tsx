import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../store/slices/teams";
import { RootState } from "../../store";

import ItemList from "../../components/ItemList";

export default function Teams(props: any) {
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.teams.teams);
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  return (
    <div>
      <h1>Teams</h1>
      <ItemList items={teams} itemType="teams" />
    </div>
  );
}
