import logo from "./assets/Union.svg";
import "./App.css";
import Lottie from "react-lottie";
import animationData from "./lotties/logo";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className="App">
        <Card />
      </div>
    </div>
  );
}

export default App;
