import "./App.css";
import Landing from "../src/pages/Landing";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
