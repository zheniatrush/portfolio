import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const MyFuture = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        minHeight: "100vh",
        bgcolor: "#f9fbff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "900",
          color: "#1a237e",
          letterSpacing: "0.12em",
          mb: 4,
          userSelect: "none",
          textTransform: "uppercase",
          textShadow: "1px 1px 4px rgba(26,35,126,0.3)",
        }}
      >
        🚀 Моє Майбутнє
      </Typography>

      <Card
        sx={{
          maxWidth: 840,
          width: "100%",
          bgcolor: "#e8f0fe",
          borderRadius: 4,
          boxShadow:
            "0 8px 20px rgba(26, 35, 126, 0.25), 0 0 10px rgba(33, 150, 243, 0.15)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow:
              "0 12px 30px rgba(26, 35, 126, 0.35), 0 0 15px rgba(33, 150, 243, 0.25)",
          },
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 6 },
          mb: 6,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 700, mb: 2, color: "#0d47a1" }}
        >
          💡 Мотиваційна фраза:
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          color="#1565c0"
          sx={{ fontWeight: 600 }}
        >
          “Успіх приходить до тих, хто не боїться почати з нуля і не
          зупиняється на півдорозі.”
        </Typography>
      </Card>

      <Box sx={{ maxWidth: 900, width: "100%" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 700, color: "#1976d2", mb: 4 }}
        >
          📈 3 кроки до мрії:
        </Typography>
        <Timeline
          position="alternate"
          sx={{
            "& .MuiTimelineItem-root": {
              minHeight: 110,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                color="primary"
                sx={{
                  boxShadow:
                    "0 0 10px rgba(25, 118, 210, 0.7)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#2196f3" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold" color="#0d47a1">
                1. Освоїти сучасні технології
              </Typography>
              <Typography variant="body2" color="#1565c0">
                Глибоко вивчити JavaScript, React, Node.js, та бази даних.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                color="secondary"
                sx={{
                  boxShadow:
                    "0 0 10px rgba(156,39,176,0.7)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#9c27b0" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold" color="#7b1fa2">
                2. Стажування або робота в IT-компанії
              </Typography>
              <Typography variant="body2" color="#9c27b0">
                Набути практичного досвіду в реальних проєктах.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                color="success"
                sx={{
                  boxShadow:
                    "0 0 10px rgba(56,142,60,0.7)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <RocketLaunchIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold" color="#2e7d32">
                3. Стати професіоналом та надихати інших
              </Typography>
              <Typography variant="body2" color="#388e3c">
                Працювати в міжнародній компанії або створити власний продукт.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      <Grid container spacing={5} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 900 }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 4,
              bgcolor: "#fffde7",
              boxShadow: "0 8px 20px rgba(255, 235, 59, 0.3)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 30px rgba(255, 235, 59, 0.5)",
              },
              px: 4,
              py: 5,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: "#f9a825" }}>
                🎯 Робота мрії:
              </Typography>
              <Typography variant="body1" sx={{ color: "#795548", fontWeight: 500, fontSize: 18 }}>
                Хочу стати WordPress-розробником, який створює не просто інтерфейси, а приємний досвід для користувача.
                Мене надихає можливість поєднувати дизайн і технології, працювати в команді і розвиватись щодня.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(33, 150, 243, 0.3)",
              transition: "transform 0.3s ease",
              "&:hover img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Inspiration"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyFuture;
