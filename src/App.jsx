import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/static/Header.jsx";
import { ContainCard, DetailCharacter } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContainCard />} />
        <Route path="/:filterStatus" element={<ContainCard />} />
        <Route path="/detail/:idCharacter" element={<DetailCharacter />} />
        <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
