import React from "react";

export function Footer(props) {
  console.log(props);

  return (
    <footer>
      <div>
        <figure>
          <img src={props.filme} alt={props.titulo} />
        </figure>
        <div><h3>{props.titulo}</h3></div>
      </div>
    </footer>
  );
}
