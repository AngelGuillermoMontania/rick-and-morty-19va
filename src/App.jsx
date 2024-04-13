import Header from "./components/Header.jsx";
import ContainCard from "./components/ContainCard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailCharacter from "./components/DetailCharacter.jsx";

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
