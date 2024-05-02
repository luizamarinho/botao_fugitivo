import React from "react";

const sim = window.document.getElementById("opcyes");
const nao = window.document.getElementById("opcNo");

let estado = -1;
function entrar() {
  estado++;
  if (estado === 0) {
  }
}

export function App() {
  // function handleClick() {
  //   alert("Vamos assistir Mandalorian, puta!!!");
  // }
  React.useEffect(() => {
    window.addEventListener("mouseenter", entrar);
  });

  return (
    <>
      <h1>Você me ama?</h1>
      <div className="page">
        <button
          className="button"
          // onClick={handleClick}
        >
          Sim
        </button>
        <button
          className="button"
          // onClick={handleClick}
        >
          Não
        </button>
      </div>
    </>
  );
}
