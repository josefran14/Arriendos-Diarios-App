import { Box, Typography, Link, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Info = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #4B0082 0%, #793CFB 60%, #9c6fff 100%)",
        color: "#fff",
        py: { xs: 5, md: 7 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <LocationOnIcon sx={{ fontSize: 40, mb: 1, opacity: 0.9 }} />
        <Typography
          component="h1"
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "Lora",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mb: 1,
          }}
        >
          Arriendo Diario en Santiago Centro
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            opacity: 0.9,
            mb: 3,
            fontSize: { xs: "1rem", md: "1.15rem" },
          }}
        >
          Departamentos amoblados a 2 cuadras del Metro Universidad de Chile
        </Typography>
        <Link
          href="https://wa.me/56983311056"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            padding: "12px 28px",
            backgroundColor: "#25D366",
            color: "white",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.05rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease, background-color 0.2s ease",
            "&:hover": {
              backgroundColor: "#1ebe57",
              transform: "scale(1.04)",
            },
          }}
        >
          <WhatsAppIcon />
          Hablemos por WhatsApp
        </Link>
      </Container>
    </Box>
  );
};
