import React from "react";
import { useParams } from "react-router-dom";

interface Params {
    id: string;
}

export default function Team(props: any) {
  const params: Params = useParams();
  return (
    <div>
      <h2>Team Overview</h2>
      <p>{params.id}</p>
    </div>
  );
}
