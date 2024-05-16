import { Box, Pagination } from "@mui/material";
import CardCharacter from "../components/CardCharacter";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

export default function ContainCard() {
  const { filterStatus } = useParams();

  const { getCharacters, characters, changePage, totalPages, page } =
    useCharacter();

  /* Cambia la pagina actual renderizada, funcion usada con MaterialUI */
  const handleChange = (event, value) => {
    changePage(value);
  };

  useEffect(() => {
    getCharacters(filterStatus, page);
  }, [filterStatus, page]);

  useEffect(() => {
    changePage(1);
  }, [filterStatus]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {characters &&
        characters.map((character) => {
          return <CardCharacter key={character.id} character={character} />;
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
