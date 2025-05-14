import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const projects = {
  htmlCss: [
    {
      title: "Інтернет магазин",
      url: "https://github.com/zheniatrush/funiro",
    },
    {
      title: "Сайт пекарні",
      url: "https://github.com/zheniatrush/bacery",
    },
  ],
  javascript: [
    {
      title: "Портфоліо",
      url: "https://github.com/zheniatrush/AlexSmith",
    },
    {
      title: "НАТК",
      url: "https://github.com/zheniatrush/natc",
    },
  ],
  react: [
    {
      title: "use-effect",
      url: "https://github.com/zheniatrush/use-effect",
    },
    {
      title: "Сайт пекарні",
      url: "https://github.com/zheniatrush/bacery",
    },
  ],
};

const AboutMe = () => {
  // Об’єднуємо всі проєкти в один масив із категорією
  const allProjects = Object.entries(projects).flatMap(([category, repos]) =>
    repos.map((repo) => ({ ...repo, category }))
  );

  // Функція для читабельного відображення категорії
  

  return (
    <Box
      sx={{
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
        bgcolor: "#f5f7fa",
        minHeight: "100vh",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontFamily: "'Roboto Slab', serif",
          color: "#1976d2",
          letterSpacing: "0.1em",
          mb: 4,
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Про мене
      </Typography>

      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          mb: 8,
          fontSize: 18,
          color: "#424242",
          lineHeight: 1.7,
          fontWeight: 500,
          fontFamily: "'Open Sans', sans-serif",
          textAlign: "justify",
          px: { xs: 1, md: 0 },
        }}
      >
        <Typography paragraph>
          Привіт! Мене звати Євгеній Труш. Я — відповідальний, цілеспрямований
          та креативний розробник. Захоплююсь вирішенням складних задач і
          створенням інтуїтивних інтерфейсів.
        </Typography>
        <Typography paragraph>
          Ціную ефективну командну роботу, відкритість до нового та професійний
          розвиток. Особливо цікавлюсь React та сучасними веб-технологіями.
        </Typography>
        <Typography paragraph>
          Навчаюсь у ВНЗ за спеціальністю "Програмна інженерія". Постійно
          розвиваюсь, працюю над проєктами з реальними користувачами та
          вдосконалюю навички.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{
          mb: 6,
          fontWeight: 700,
          fontFamily: "'Roboto Slab', serif",
          color: "#1976d2",
          letterSpacing: "0.05em",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Мої проєкти
      </Typography>

      {/* Групуємо проєкти по категоріях з підзаголовками */}
      {["htmlCss", "javascript", "react"].map((cat) => {
        const filtered = allProjects.filter((p) => p.category === cat);
        return (
          <Box key={cat} sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#1565c0",
                mb: 3,
                fontFamily: "'Roboto Slab', serif",
                letterSpacing: "0.05em",
                textAlign: "center",
              }}
            >
              
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {filtered.map((repo, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: 3,
                      boxShadow: "0 8px 20px rgba(21, 101, 192, 0.15)",
                      transition: "transform 0.4s ease, box-shadow 0.4s ease",
                      bgcolor: "#ffffff",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 16px 40px rgba(21, 101, 192, 0.3)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#0d47a1",
                          textAlign: "center",
                          fontFamily: "'Roboto Slab', serif",
                        }}
                      >
                        {repo.title}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", pb: 3 }}>
                      <Button
                        variant="contained"
                        href={repo.url}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          bgcolor: "#1976d2",
                          color: "#fff",
                          fontWeight: 700,
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          textTransform: "none",
                          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
                          transition:
                            "background-color 0.3s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            bgcolor: "#1565c0",
                            boxShadow: "0 6px 16px rgba(21, 101, 192, 0.6)",
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default AboutMe;
