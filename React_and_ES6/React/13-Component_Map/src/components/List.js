import React from "react";

const List = props => (
  <ul className="list-group">
    {props.groceries.map(item => (
      <li className="list-group-item" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
