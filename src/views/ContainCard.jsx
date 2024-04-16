import { Box, Pagination } from "@mui/material";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ContainCard() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { filterStatus } = useParams();

  /* Cambia la pagina actual renderizada, funcion usada con MaterialUI */
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
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
  }, [filterStatus, page]);

  useEffect(() => {
    setPage(1);
  }, [filterStatus]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {characters &&
        characters.map(({ id, name, species, gender, image, status }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              status={status}
            />
          );
        })}

      <Pagination
        count={totalPages} // Le dice a MUI cuantas paginas debe habilitar
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
}
