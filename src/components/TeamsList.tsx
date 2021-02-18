import React from "react";
import { Link } from "react-router-dom";

export default function TeamsList(props: any) {
  return (
    <div className="teams-list-container">
      {props.teams.map((team: any) => (
        <Link to={`/teams/${team.id}`}>
          <div key={team.id}>
            <h2>{team.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
