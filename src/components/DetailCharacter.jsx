import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailCharacter() {
  const [character, setCharacter] = useState({});

  const { idCharacter } = useParams();

  useEffect(() => {
    async function getCharacter() {
      try {
        const response = await axios(
          `https://rickandmortyapi.com/api/character/${idCharacter}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCharacter();
  }, [idCharacter]);

  // material-ui
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4">{character.name}</Typography>
      <img src={character.image} alt={character.name} />
      <Typography variant="body1">
        <strong>Species:</strong> {character.species}
      </Typography>
      <Typography variant="body1">
        <strong
          style={{
            color:
              character.status === "Alive"
                ? "green"
                : character.status === "Dead"
                ? "red"
                : "gray",
          }}
        >
          Status:
        </strong>{" "}
        {character.status}
      </Typography>
    </Box>
  );
}
