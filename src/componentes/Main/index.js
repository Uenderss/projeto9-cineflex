import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import "reset-css";
import "../../style/style.css";



export function Main() {
  const [cartaz, setCartaz] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .then(function (response) {
        console.log(response.data);
        setCartaz(response.data);
      });
  }, []);

  return cartaz.length > 0 ? (
    <main>
      <div className="titulo">
        <h2>Selecione o filme</h2>
      </div>
      <section>
        {cartaz.map((filme) => {
          const { id, posterURL, title } = filme;
          return (
            <Link to={`filmes/${id}`}>
              <div className="filme" key={id}>
                <img src={posterURL} alt={title} />
              </div>
           </Link>
          );
          /**passar outras variaveis como parametro para proxima pagia */
        })}
      </section>
    </main>
  ) : (
    <main>
      <div className="titulo">
        <h2>Carregando...</h2>
      </div>
    </main>
  );
}
