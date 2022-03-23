import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SplashPage from "./pages/SplashPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />

      <Route path="/landingpage" element={<Landing />} />
    </Routes>
  );
}

export default Main;
