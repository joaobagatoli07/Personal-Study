import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from "./components/Condicional";
import Lista from "./components/Lista";
import { useState } from "react";
import Nome from "./components/Nome";
import Saudacao from "./components/Saudacao";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";

function App() {

  const meusItens = ['React', 'Vue', 'Angular']
  // let name = "João";
  // name = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  const [nome, setNome] = useState()

  // return (
  //   <div className="App">
  //     <SayMyName nome="João"></SayMyName>
  //     <SayMyName nome="Maria"></SayMyName>
  //     {/* <h1>Olá, {name}</h1> */}
  //     <h2>Soma: {sum(2, 2)}</h2>
  //     <img src={url}></img>
  //     <HelloWorld></HelloWorld>
  //     <Pessoa nome="Joao" idade="18" profissao="dev"></Pessoa>
  //     <Frase></Frase>
  //     <List></List>
  //     <Evento></Evento>
  //     <Form></Form>
  //     <Condicional></Condicional>
  //     <Lista items={meusItens}></Lista>
  //     <Lista items={[]}></Lista>
  //     <Nome setNome={setNome}></Nome>
  //     <Saudacao nome={nome}></Saudacao>
  //   </div>
  // );

    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/empresa" element={<Empresa></Empresa>}></Route>
          <Route path="/contato" element={<Contato></Contato>}></Route>
        </Routes>
      </Router>
    )
}

export default App;
