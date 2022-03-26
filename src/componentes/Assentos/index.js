import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "../Footer";
// import { Link } from "react-router-dom";

export function Assentos() {
  const { idSessao } = useParams();

  const [sessao, setSessao] = useState(null);

  const poltronas = [];
  for (let i = 0; i < 50; i++) {
    poltronas.push(i);
  }
  console.log(poltronas);
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
      <section className="assento">
        <div className="titulo">
          <h2>Selecione o(s) assentos</h2>
        </div>
        <div className="comprador">
          <div className="assentos">
            {poltronas.map((poltrona) => {
              return (
              
                <span>
                  <div className="circulo disponivel" >
                    <p>{poltrona + 1}</p>
                  </div>
                </span>
                
              );
            })}
          </div>

          <div className="legenda">
            <span>
              <div className="circulo selecionado"></div>
              <h4>Selecionado</h4>
            </span>
            <span>
              <div className="circulo disponivel"></div>
              <h4>Disponivel</h4>
            </span>
            <span>
              <div className="circulo indisponivel"></div>
              <h4>Indisponivel</h4>
            </span>
          </div>
          <div>
            <div className="inputs">
              <label>Nome do Comprador</label>
              <input placeholder="Digite seu nome..."></input>
            </div>
            <div className="inputs">
              <label>CPF do comprador</label>
    
              <input placeholder="Digite seu CPF..."></input>
            </div>
          </div>
          <button className="reserva">Reservar assentos(s)</button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
