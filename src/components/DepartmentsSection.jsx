import { Box, Typography, Grid, Container } from "@mui/material";
import { departments } from "../data/departments";
import { DepartmentCard } from "./DepartmentCard";

export const DepartmentsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        background: "linear-gradient(180deg, #faf8ff 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            sx={{ color: "#793CFB", fontWeight: 700, letterSpacing: 2 }}
          >
            NUESTROS DEPARTAMENTOS
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: "Lora",
              color: "#263238",
              mt: 1,
            }}
          >
            Elige tu estadía ideal
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1, maxWidth: 560, mx: "auto" }}
          >
            Dos departamentos amoblados en Santiago Centro, a pasos del Metro
            Universidad de Chile. Comodidad, ubicación y precios según tu grupo.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {departments.map((dept) => (
            <Grid item xs={12} md={6} key={dept.id}>
              <DepartmentCard department={dept} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
