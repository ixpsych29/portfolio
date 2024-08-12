import "./App.css";
import AppBar from "./components/appBar";
import DateBar from "./components/dateBar";
import Terminal from "./components/terminal";

function App() {
  return (
    <div className="App">
      <DateBar />
      <Terminal />
      <AppBar />
    </div>
  );
}

export default App;
