import React from "react";
import { Link } from "react-router-dom";

import "./itemList.css"

export default function ItemList(props: any) {
  return (
    <div className="item-list-container">
      {props.items.map((item: any) => (
        <Link to={`/${props.itemType}/${item.id}`} key={item.id}>
          <div className="item-list-row">
            <h2>{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
