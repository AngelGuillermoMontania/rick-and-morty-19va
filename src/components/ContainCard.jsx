import { Box, Pagination } from "@mui/material";
import Card from "./Card";

export default function ContainCard({ characters, page, setPage, totalPages }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

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
