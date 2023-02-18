import * as React from "react";

export const Room = (props) => {
  return (
    <td
      style={{ backgroundImage: `url(${props.room})` }}
    >
    </td>
  );
};
