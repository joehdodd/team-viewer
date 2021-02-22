import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../store/slices/teams";
import { RootState } from "../../store";

import Search from "../../components/Search";
import ItemList from "../../components/ItemList";

import { filter } from "../../lib/filter";

import "./teams.css";

export default function Teams(props: any) {
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.teams.teams);
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredTeams, setFilteredTeams] = React.useState(teams);
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  useEffect(() => {
    const filteredTeams = filter(searchValue, teams);
    setFilteredTeams(filteredTeams);
  }, [searchValue, teams]);
  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  return (
    <div>
      <div className="teams-overview-header">
        <h1>Teams</h1>
        <Search
          searchValue={searchValue}
          onChange={handleChange}
          placeholder="Filter Teams..."
        />
      </div>
      <ItemList items={filteredTeams} itemType="teams" />
    </div>
  );
}
