import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  // let name = "João";
  // name = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <SayMyName nome="João"></SayMyName>
      <SayMyName nome="Maria"></SayMyName>
      {/* <h1>Olá, {name}</h1> */}
      <h2>Soma: {sum(2, 2)}</h2>
      <img src={url}></img>
      <HelloWorld></HelloWorld>
      <Pessoa nome="Joao" idade="18" profissao="dev"></Pessoa>
      <Frase></Frase>
      <List></List>
    </div>
  );
}

export default App;
