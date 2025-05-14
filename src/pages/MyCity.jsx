import { Box, Typography, Card, Grid, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { fetchWeather } from "../api/fetchWeather";

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadWeatherData = async () => {
      setLoading(true);
      const data = await fetchWeather("Nosivka");
      setTimeout(() => {
        setWeather(data);
        setLoading(false);
      }, 500);
    };
    loadWeatherData();
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        minHeight: "100vh",
        bgcolor: "#e3f2fd", // світлий блакитний фон
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1565c0",
          mb: { xs: 6, md: 8 },
          fontFamily: "'Roboto Slab', serif",
          letterSpacing: "0.1em",
          userSelect: "none",
        }}
      >
        Моє місто — Носівка
      </Typography>

      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{ maxWidth: 1000, width: "100%" }}
      >
        {/* Про місто */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={8}
            sx={{
              borderRadius: 4,
              bgcolor: "#1976d2",
              color: "white",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: 4,
              py: 5,
              boxShadow: "0 12px 24px rgba(25, 118, 210, 0.4)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 18px 36px rgba(25, 118, 210, 0.6)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontFamily: "'Roboto Slab', serif",
                letterSpacing: "0.05em",
                mb: 2,
              }}
            >
              📍 Про місто
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.7, fontWeight: 500, fontSize: 18 }}
            >
              Носівка — місто в Чернігівській області України, розташоване на річці Носівка. Засноване у XVI столітті, відоме своєю історією, культурною спадщиною та традиціями, а також значним розвитком промисловості й сільського господарства в регіоні.
            </Typography>
          </Card>
        </Grid>

        {/* Погода */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={10}
            sx={{
              borderRadius: 4,
              bgcolor: "white",
              px: 4,
              py: 5,
              textAlign: "center",
              boxShadow: "0 12px 24px rgba(33, 150, 243, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ fontSize: 48, color: "#1976d2", mb: 1 }} />
            {loading ? (
              <Box sx={{ mt: 3 }}>
                <Typography variant="body1" gutterBottom color="#1976d2">
                  Завантаження погоди...
                </Typography>
                <CircularProgress color="primary" size={40} />
              </Box>
            ) : weather && weather.current ? (
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 700, color: "#1565c0" }}
                >
                  {`${weather.location.name}, ${weather.location.region}, ${weather.location.country}`}
                </Typography>
                <Box
                  component="img"
                  src={weather.current.condition.icon}
                  alt="weather-icon"
                  sx={{ width: 96, height: 96, my: 2 }}
                />
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 900, color: "#0d47a1" }}
                >
                  {weather.current.temp_c}°C
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#1565c0", mb: 3, fontWeight: 600 }}
                >
                  {weather.current.condition.text}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#1976d2",
                    mb: 1,
                  }}
                >
                  Координати
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    fontWeight: 600,
                    color: "#1565c0",
                    fontSize: 16,
                  }}
                >
                  <Typography>{weather.location.lat}</Typography>
                  <Typography>{weather.location.lon}</Typography>
                </Box>
              </>
            ) : (
              <Typography variant="body1" color="error" sx={{ mt: 3 }}>
                Не вдалося завантажити погоду.
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyCity;
