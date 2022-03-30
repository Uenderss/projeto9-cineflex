import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "../Footer";
import {Sucesso} from "../Assentos/";



export function Assentos() {
  const { idSessao } = useParams();
  const [sessao, setSessao] = useState(null);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [selecionado, setSelecionado] = useState([]);
  const [pagina,setPagina]=useState('Assentos');

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
      )
      .then((response) => {
        const { data } = response;
        setSessao(data);
      }, [])
      .catch((erro) => console.error(erro.response));
  }, []);

  if (sessao === null) {
    return <></>;
  }
  const { day, name, seats } = sessao;
  
  function enviarDados(event) {
  
    event.preventDefault(); // padrão = recarregar a pagina
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: [...selecionado],
        name: nome,
        cpf: cpf,
      }
    );
    promise.then((response) => {
      setPagina("Sucesso");
       
      

    });
    promise.catch((err) => {
      alert("Deu ruim");
    
    });
    
    
  }

  function classeDisponibilidade(assento) {
    if (assento.isAvailable && selecionado.includes(assento.id)) {
      return "disponivel selecionado";
    }
    if (assento.isAvailable) {
      return "disponivel";
    }
    if (assento.isAvailable === false) {
      return "indisponivel";
    }
  }

  function toggleAssento(assento) {
    if (assento.isAvailable === false) {
      alert("Esse assento não está disponível");
      return;
    }

    if (selecionado.includes(assento.id)) {
      selecionado.splice(selecionado.indexOf(assento.id), 1);
      setSelecionado([...selecionado]);
      return;
    }
    setSelecionado((selecionado) => [...selecionado, assento.id]);
  }
  
  
    return<>
      <section className="assento">
        <div className="titulo">
          <h2>Selecione o(s) assentos</h2>
        </div>
        <div className="comprador">
          <div className="assentos">
            {seats.map((assento) => {
              return (
                <button
                  key={assento.name * 1}
                  className={`circulo ${classeDisponibilidade(assento)}`}
                  onClick={() => toggleAssento(assento)}
                >
                  <p>{assento.name}</p>
                </button>
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
              <input
                placeholder="Digite seu nome..."
                type="text"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              ></input>
            </div>
            <div className="inputs">
              <label>CPF do comprador</label>
              <input
                placeholder="Digite seu CPF..."
                onChange={(e) => setCpf(e.target.value)}
                value={cpf}
              ></input>
            </div>
          </div>
          
            <button className="reserva" onClick={enviarDados}>  
             
              Reservar assentos(s)
            </button>
          
        </div>
      </section>
      <Footer
     
        titulo={sessao.movie.title}
        filme={sessao.movie.posterURL}
        dia={day.weekday}
        hora={name}
      />
    </>
  

}
