import axios from "axios";
import { useState } from "react";

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function getCharacters(filterStatus, page) {
    axios(
      `https://rickandmortyapi.com/api/character/?page=${page}&${
        filterStatus ? `status=${filterStatus}` : ""
      }`
    )
      .then(({ data }) => {
        setTotalPages(data.info.pages);
        setCharacters(data.results);
      })
      .catch((error) => console.log(error));
  }

  async function getCharacter(idCharacter) {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${idCharacter}`
      );
      setCharacter(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function changePage(page) {
    setPage(page);
  }

  return {
    characters,
    character,
    getCharacters,
    getCharacter,
    character,
    changePage,
    totalPages,
    page,
  };
}
