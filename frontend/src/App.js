import React from "react";

import "./global.css";

import Routes from "./routes";

//JSX (JavaScript XML): quando o HTML está no javascript
//Componente no React: é uma função que retorna HTML
//Propriedades no React == Atributos no HTML
/**
 * Pode-se ter propriedades como um HTML normal: 
 * 
 * <Header>
 *  Semana OmniStack 11
 * </Header>
 * 
 * Para se recuperar no Header.js, usamos o atributo 'children' que vai pegar tudo que tem dentro da tag como filho.
 */

function App() {
  return (
    <Routes />
  );
}

export default App;
