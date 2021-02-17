import React from "react";

export default function TeamsList(props: any) {
  return (
    <div>
      {props.teams.map((team: any) => (
        <div key={team.id}>
          <h2>{team.name}</h2>
        </div>
      ))}
    </div>
  );
}
