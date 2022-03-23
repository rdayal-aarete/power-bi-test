import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function Main() {
  return (
    <Routes>
      <Route path="/landingpage" element={<Landing />} />
    </Routes>
  );
}

export default Main;
