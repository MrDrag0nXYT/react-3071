import "./App.css";

import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Item />

      <a className="button" onClick={sendMessage}>Узнать ответы</a>
    </div>
  );
}



function sendMessage() {
  alert("Этого в задании не было");
}

export default App;
