import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link as LinkDelRouter, useNavigate } from "react-router-dom";

export default function CardCharacter({
  name,
  species,
  gender,
  image,
  status,
  id,
}) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "20px",
        border: "1px solid #a3a2a2",
        boxShadow: "1px 1px 12px 0px rgba(77,74,74,0.75)",
      }}
      onClick={() => navigate(id)}
    >
      <CardMedia
        sx={{ height: 250, width: 250 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "1rem",
            color: "#080854",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#212120",
          }}
        >
          Gender:{" "}
          <Typography sx={{ color: "#080854", marginLeft: "5px" }}>
            {gender}
          </Typography>
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#212120",
          }}
        >
          Species:{" "}
          <Typography sx={{ color: "#080854", marginLeft: "5px" }}>
            {species}
          </Typography>
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#212120",
          }}
        >
          Status:{" "}
          <Typography sx={{ color: "#080854", marginLeft: "5px" }}>
            {status}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
