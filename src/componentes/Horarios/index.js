import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import {Footer} from "../Footer";
import {Link} from 'react-router-dom';

export function Horarios() {
  const { idHorario } = useParams();
  
  const [filme, setFilme] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idHorario}/showtimes`
      )
      .then((response) => {
        const { data } = response;
        setFilme(data);
      }, [])
      .catch((erro) => console.error(erro.response));
  },[]);


  if (filme === null) {
    return <></>;
  }
  const { title, posterURL, days } = filme;
  
  return (
    <>
    <section>
      <div className="titulo">
        <h2>Selecione o horário</h2>
      </div>
      {days.map((day) => {
        const { weekday, date, showtimes } = day;
        return (
          <div className="sessao">
            <div className="dias">
              <h3>
                {weekday} - {date}{" "}
              </h3>
            </div>
            <div>
              {showtimes.map((sessao) => {
                const { name,id } = sessao;
                return <><Link to={`/sessao/${id}`}>
                  <button className="horario">{name}</button>
                  </Link>
                  </>;
              })}
            </div>
          </div>
        );
      })}

    </section>
    <Footer titulo={title} filme={posterURL}/>
    </>
  );
}
