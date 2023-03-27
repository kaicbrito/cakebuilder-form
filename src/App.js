import { useState } from "react";
import { BasicForm } from './components'
import "./App.css";
import { Consultar } from "./components";



function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Preencha seus dados
        </h3>
        <h3
          onClick={() => setView("consultar")}
          style={{ color: view === "consultar" ? "#fff" : "" }}
        >
          Consultar dados
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <Consultar/>}
    </div>
  );
}

export default App;
