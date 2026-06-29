import { useNavigate } from "react-router";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const DepartmentCard = ({ department }) => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid #e8e0f5",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 40px rgba(121, 60, 251, 0.18)",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={department.coverImage}
          alt={department.title}
          sx={{
            height: { xs: 220, md: 260 },
            objectFit: "cover",
          }}
        />
        <Chip
          icon={<PeopleIcon sx={{ fontSize: "16px !important" }} />}
          label={department.capacity}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "rgba(255,255,255,0.95)",
            fontWeight: 600,
            color: "#512DA8",
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontFamily: "Lora",
            color: "#263238",
            mb: 0.5,
          }}
        >
          {department.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {department.subtitle}
        </Typography>

        <Box
          sx={{
            p: 1.5,
            mb: 2,
            borderRadius: 2,
            background: "linear-gradient(135deg, #f3e8ff 0%, #ede7f6 100%)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#512DA8", fontSize: "1.1rem" }}
          >
            {department.priceLabel}
          </Typography>
          <Typography variant="caption" sx={{ color: "#6a4b9a" }}>
            {department.priceDetail}
          </Typography>
        </Box>

        <Stack spacing={0.5} sx={{ mb: 3, flexGrow: 1 }}>
          {department.highlights.map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ color: "#455a64", display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#793CFB",
                  flexShrink: 0,
                }}
              />
              {item}
            </Typography>
          ))}
        </Stack>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate(`/${department.slug}`)}
          sx={{
            py: 1.2,
            fontWeight: "bold",
            fontSize: "0.95rem",
            textTransform: "none",
            borderRadius: 2,
            backgroundColor: "#793CFB",
            "&:hover": { backgroundColor: "#5a2fcc" },
          }}
        >
          Ver departamento
        </Button>
      </CardContent>
    </Card>
  );
};
