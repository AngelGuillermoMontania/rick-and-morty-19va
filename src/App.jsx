import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import ContainCard from "./components/ContainCard.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function handleSet(status) {
    setStatus(status);
    setPage(1);
  }

  useEffect(() => {
    axios(
      `https://rickandmortyapi.com/api/character/?page=${page}&${
        status ? `status=${status}` : ""
      }`
    )
      .then(({ data }) => {
        setTotalPages(data.info.pages);
        setCharacters(data.results);
      })
      .catch((error) => console.log(error));
  }, [status, page]);

  return (
    <>
      <Header handleSet={handleSet} />
      <ContainCard
        characters={characters}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default App;
