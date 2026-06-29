import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
  Tooltip,
  Button,
} from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.jpg";
import mercadoPago from "../assets/images/mercado-pago-logo-vector-2023.png";
import { Kitchen, Tv, Whatshot, Wifi } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router";

const featureIcons = {
  furnished: WorkIcon,
  bathroom: BathtubIcon,
  bedroom: HotelIcon,
  bed: HotelIcon,
};

export const DepartmentDetail = ({ department }) => {
  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();
  const { images: fotos } = department;

  return (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 4 }, maxWidth: 960, mx: "auto" }}>
      <Typography
        variant="overline"
        display="block"
        textAlign="center"
        sx={{ color: "#793CFB", fontWeight: 700, letterSpacing: 2 }}
      >
        {department.capacity}
      </Typography>

      <Typography
        component="h1"
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{
          fontWeight: "bold",
          fontFamily: "Lora",
          color: "#263238",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        {department.title}
      </Typography>

      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{ color: "text.secondary", mb: 1, fontSize: { xs: "0.95rem", md: "1rem" } }}
      >
        {department.subtitle}
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          mb: 3,
          p: { xs: 1.5, md: 2 },
          borderRadius: 3,
          background: "linear-gradient(135deg, #f3e8ff 0%, #ede7f6 100%)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            color: "#512DA8",
            fontSize: { xs: "1.35rem", md: "1.5rem" },
          }}
        >
          {department.priceLabel}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#6a4b9a", mt: 0.5, fontSize: { xs: "0.78rem", md: "0.875rem" } }}
        >
          {department.priceDetail}
        </Typography>
      </Box>

      <Box
        sx={{
          mb: 3,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "grid" },
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 0.5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: 280, sm: 330, md: 450 },
              overflow: "hidden",
              cursor: "pointer",
              "&:hover img": {
                transform: "scale(1.03)",
                transition: "transform 0.4s ease",
              },
            }}
            onClick={() => setIndex(0)}
          >
            <img
              src={fotos[0]}
              alt={`${department.title} - foto principal`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: { md: "repeat(2, 1fr)" },
            gridTemplateRows: { md: "repeat(2, 1fr)" },
            gap: { xs: 1, md: 0.5 },
            height: { xs: "auto", md: 450 },
            overflowX: { xs: "auto", md: "visible" },
            p: { xs: 1, md: 0 },
            backgroundColor: { xs: "#fff", md: "transparent" },
            "&::-webkit-scrollbar": { height: 8 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#d0d0d0",
              borderRadius: 10,
            },
          }}
        >
          {fotos.slice(1, 5).map((foto, i) => (
            <Box
              key={i}
              sx={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                height: { xs: 90, sm: 110, md: "auto" },
                minWidth: { xs: 120, sm: 145, md: "unset" },
                borderRadius: { xs: 1.5, md: 0 },
                flex: { xs: "0 0 auto", md: "unset" },
                "&:hover img": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
              onClick={() => setIndex(i + 1)}
            >
              <img
                src={foto}
                alt={`${department.title} - miniatura ${i + 2}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {i === 3 && fotos.length > 5 && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    fontWeight: "bold",
                  }}
                >
                  +{fotos.length - 5}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          mb: 4,
          p: { xs: 2, md: 3 },
          backgroundColor: "#fafafa",
          borderRadius: 3,
          border: "1px solid #eee",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Características del Departamento
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {department.features.map((feature) => {
            const Icon = featureIcons[feature.icon] || WorkIcon;
            return (
              <Chip
                key={feature.label}
                icon={<Icon />}
                label={feature.label}
                variant="outlined"
                sx={{
                  mb: 1,
                  height: { xs: 28, md: 32 },
                  "& .MuiChip-label": { px: { xs: 1, md: 1.5 }, fontSize: { xs: 12, md: 13 } },
                }}
              />
            );
          })}
          <Chip
            icon={<PeopleIcon />}
            label={department.capacity}
            color="primary"
            variant="outlined"
            sx={{
              mb: 1,
              height: { xs: 28, md: 32 },
              "& .MuiChip-label": { px: { xs: 1, md: 1.5 }, fontSize: { xs: 12, md: 13 } },
            }}
          />
        </Stack>
      </Box>

      <Box
        sx={{
          mb: 4,
          p: { xs: 2, md: 4 },
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          borderRadius: 3,
          textAlign: "justify",
        }}
      >
        <Typography variant="h6" color="primary" sx={{ fontWeight: "bold", mb: 2 }}>
          Excelente Ubicación
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            fontFamily: "'Lato', sans-serif",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: { xs: 1.65, md: 1.75 },
          }}
        >
          {department.description}
        </Typography>
      </Box>

      <Box
        sx={{
          mb: 4,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <iframe
          title="Mapa de ubicación"
          src={department.mapEmbed}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      <Box
        sx={{
          mb: 4,
          p: { xs: 2, md: 3 },
          backgroundColor: "#fafafa",
          borderRadius: 3,
          border: "1px solid #eee",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Comodidades Incluidas
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Tooltip title="Wi-Fi rápido y estable" arrow>
            <Chip
              icon={<Wifi />}
              label="Wi-Fi"
              variant="outlined"
              color="success"
              sx={{
                height: { xs: 28, md: 32 },
                "& .MuiChip-label": { px: { xs: 1, md: 1.5 }, fontSize: { xs: 12, md: 13 } },
              }}
            />
          </Tooltip>
          <Tooltip title="Cocina totalmente equipada" arrow>
            <Chip
              icon={<Kitchen />}
              label="Cocina equipada"
              variant="outlined"
              color="secondary"
              sx={{
                height: { xs: 28, md: 32 },
                "& .MuiChip-label": { px: { xs: 1, md: 1.5 }, fontSize: { xs: 12, md: 13 } },
              }}
            />
          </Tooltip>
          <Tooltip title="TV por cable con canales premium" arrow>
            <Chip
              icon={<Tv />}
              label="TV Cable"
              variant="outlined"
              color="info"
              sx={{
                height: { xs: 28, md: 32 },
                "& .MuiChip-label": { px: { xs: 1, md: 1.5 }, fontSize: { xs: 12, md: 13 } },
              }}
            />
          </Tooltip>
          <Tooltip title="Calefacción para tu confort" arrow>
            <Chip
              icon={<Whatshot />}
              label="Calefacción"
              variant="outlined"
              color="warning"
              sx={{
                height: { xs: 28, md: 32 },
                "& .MuiChip-label": { px: { xs: 1, md: 1.5 }, fontSize: { xs: 12, md: 13 } },
              }}
            />
          </Tooltip>
        </Stack>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, md: 4 },
          maxWidth: 650,
          mx: "auto",
          borderRadius: 3,
          background: "linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 100%)",
          textAlign: "center",
          mb: 6,
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Medios de Pago Aceptados
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
            alignItems: "center",
            my: 2,
          }}
        >
          <img src={visa} alt="Visa" height={45} />
          <img src={mastercard} alt="MasterCard" height={45} />
          <img src={mercadoPago} alt="Mercado Pago" height={45} />
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
          Aceptamos <strong>tarjetas de crédito</strong>,{" "}
          <strong>transferencia bancaria</strong>,{" "}
          <strong>Mercado Pago (Link)</strong> y <strong>efectivo</strong>.
        </Typography>
      </Paper>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            backgroundColor: "#793CFB",
            "&:hover": { backgroundColor: "#5a2fcc" },
          }}
        >
          Volver al Inicio
        </Button>
      </Box>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={fotos.map((src) => ({ src }))}
      />
    </Box>
  );
};
