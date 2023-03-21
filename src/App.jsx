import "./App.css";
import IndexPage from "./pages/IndexPage";
import { Route, Routes } from "react-router-dom";
import SpinPage from "./pages/SpinPage";
import PrizePage from "./pages/PrizePage";

function App() {
  return (
    <div className="bg-bg_sm w-screen h-screen bg-cover bg-center md:bg-bg_md lg:bg-bg_lg bg-no-repeat">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/spin" element={<SpinPage />} />
        <Route path="/prize" element={<PrizePage />} />
      </Routes>
    </div>
  );
}

export default App;
