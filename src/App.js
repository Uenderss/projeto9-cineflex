import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./componentes/Header";
import {Main} from "./componentes/Main/index.js";
import {Assentos} from "./componentes/Assentos/index.js";
import {Horarios} from "./componentes/Horarios/index.js";
import {Sucesso} from "./componentes/Sucesso/index.js";

import "reset-css";


export default function App() {
  return (
    <div>
      
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/filmes/:idHorario" element={<Horarios />}/>
          <Route path="/sessao/:idSessao" element={<Assentos />}/>
          <Route path="/sucesso" element={<Sucesso/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}
