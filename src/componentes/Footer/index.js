import React from "react";

export function Footer(props) {
  console.log(props);

  return (
    <footer>
      <div>
        <figure>
          <img src={props.filme} alt={props.titulo} />
        </figure>
        <div> <span>{props.titulo}</span>
              <span>{
                  props.dia !== undefined ? `${props.dia} - ${props.hora}`: ``
                }
              </span>
        </div>
      </div>
    </footer>
  );
}
