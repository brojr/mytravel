import AppRouter from "components/AppRouter";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "routers/Home";

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
