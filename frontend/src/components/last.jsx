import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DFF5FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "200px",
          maxWidth: "300px",
          minHeight: "200px",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            <h1 style={{ Color: "purple" }}>103,223</h1>
            <h3 style={{ Color: "black" }}>
              men, women, and children are on the national transplant waiting
              list.
            </h3>
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://w.ndtvimg.com/sites/26/2016/09/02125449/organ-donation1.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
