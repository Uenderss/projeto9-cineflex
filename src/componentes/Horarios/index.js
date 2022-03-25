import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Horarios() {
    const {idHorario} = useParams();

    axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idHorario}/showtimes`).then(response=>{
        console.log(response)
    }).catch()

    return(<>Hoje é sobre Horarios</>);
}
