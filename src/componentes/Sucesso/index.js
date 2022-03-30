import React from "react";
import {Footer} from "../Footer";


export function Sucesso(props) {
  
  console.log(props);
  return (
    <>
    <section>
      <div className="titulo">
        <h2>props.titulo</h2>
      </div>
      

    </section>
    <Footer  />
    </>
  );
}
