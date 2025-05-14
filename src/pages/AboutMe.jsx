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
         url: "https://github.com/oleksandrkoval63/tdrive-prod",
      },
      {
         title: "Інформаційна база суддів",
         url: "https://github.com/oleksandrkoval63/wax",
      },
   ],
   javascript: [
      {
         title: "Калькулятор",
         url: "https://github.com/oleksandrkoval63/js-DOM1",
      },
      {
         title: "Next.js",
         url: "https://next-js-practic-six.vercel.app/users",
      },
   ],
   react: [
      {
         title: "Favorite Books",
         url: "https://github.com/oleksandrkoval63/react-redux-new",
      },
      {
         title: "Хлібобулочний магазин Chikery",
         url: "https://chikery-bv177s0wb-burito228s-projects.vercel.app",
      },
   ],
};

const AboutMe = () => {
   return (
      <div>
         <Box sx={{ px: 4, py: 6 }}>
            <Typography variant="h4" gutterBottom>
               Про мене
            </Typography>
            <Typography variant="body1" paragraph>
               Привіт! Мене звати Олександр. Я — відповідальний, допитливий і
               креативний розробник. Люблю навчатися, вирішувати складні
               завдання і створювати зрозумілі інтерфейси.
            </Typography>
            <Typography variant="body1" paragraph>
               🎯 Ціную чесність, послідовність та співпрацю. Захоплююсь React
               розробкою, люблю мандрувати і вивчати нові технології.
            </Typography>
            <Typography variant="body1" paragraph>
               📚 Навчаюсь у ВНЗ за спеціальністю "Комп'ютерні науки". Постійно
               покращую знання фронтенду та працюю над власними проєктами.
            </Typography>

            <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
               Мої проєкти
            </Typography>

            {Object.entries(projects).map(([category, repos]) => (
               <Box key={category} sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                     {category === "htmlCss"
                        ? "HTML + CSS"
                        : category === "javascript"
                        ? "JavaScript"
                        : "React"}
                  </Typography>

                  <Grid container spacing={2} justifyContent="center">
                     {repos.map((repo, index) => (
                        <Grid item xs={12} md={6} key={index}>
                           <Card
                              sx={{
                                 width: 300,
                                 display: "flex",
                                 flexDirection: "column",
                                 justifyContent: "space-between",
                                 minHeight: 200,
                                 background:
                                    "linear-gradient(135deg, #2196f3, #21cbf3)", // синій градієнт
                                 color: "white",
                                 borderRadius: 3,
                                 boxShadow:
                                    "0 4px 20px rgba(33, 150, 243, 0.3)",
                                 transition: "transform 0.3s ease",
                                 "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow:
                                       "0 6px 25px rgba(33, 150, 243, 0.5)",
                                 },
                              }}
                           >
                              <CardContent sx={{ flexGrow: 1 }}>
                                 <Typography variant="h6">
                                    {repo.title}
                                 </Typography>
                              </CardContent>
                              <CardActions sx={{ justifyContent: "center" }}>
                                 <Button
                                    size="small"
                                    color="#fff"
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener"
                                 >
                                    GitHub
                                 </Button>
                              </CardActions>
                           </Card>
                        </Grid>
                     ))}
                  </Grid>
               </Box>
            ))}
         </Box>
      </div>
   );
};

export default AboutMe;
