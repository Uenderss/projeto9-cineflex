import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Footer } from "../Footer";
// import { Link } from "react-router-dom";

export function Assentos() {
  const { idSessao } = useParams();

  const [sessao, setSessao] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
      )
      .then((response) => {
        console.log("V");
        console.log(response.data);

        const { data } = response;
        setSessao(data);
      }, [])
      .catch((erro) => console.error(erro.response));
  }, []);

  if (sessao === null) {
    return <></>;
  }

  console.log("sfds");
  console.log(sessao);

  return (
    <>
      <section>
        <div className="titulo">
          <h2>Selecione o horário</h2>
        </div>
        <div>
          <div>
            <label>Nome do Comprador</label><br/>
            <input placeholder="Digite seu nome..."></input>
          </div>
          <div>
            <label>CPF do comprador</label><br/>
            <input placeholder="Digite seu CPF..."></input>
          </div>
        </div>

        <button className="reserva">Reservar assentos(s)</button>
      </section>
      <footer></footer>
    </>
  );
}
