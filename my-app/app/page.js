'use client'
import Image from "next/image";
import { useState } from "react";

function gerarNumAleatorio () {
  return Math.floor(Math.random()* 100) + 1;
}


export default function Home() {
  const [hide, setHide] = useState(false);
  const [numAleat, setNumAleat] = useState(0)
  const aula = 2;
  return (
    <div>
    <h1>Olá Turma!!</h1>
    <p>Éssa é a minha {aula}ª aula de React</p>

    <button onClick={ () => setHide(!hide)}> {hide ? "Show" : "Hide"}</button>
    <button onClick={() => setNumAleat(gerarNumAleatorio())}>
      Aleatório: {numAleat};  
    </button>

    {! hide &&(
      <>
      <h1>Teste</h1>
      <h1>Teste 2</h1>
      </>
    )

    }
   </div>
  );

} 
