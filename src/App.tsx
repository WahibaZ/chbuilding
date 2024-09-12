
import './App.css';
import Greeting from "./Greeting"; 
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Greeting name="mon nom"/> {/* Passer le nom en tant que prop */}
      <Counter/>
     
    </div>
  );
}

export default App;
