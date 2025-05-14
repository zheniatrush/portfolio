import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
   return (
      <Box
         component="footer"
         sx={{
            py: 4,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
               theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
         }}
      >
         <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="space-between">
               <Grid>
                  <Typography variant="h6" gutterBottom>
                     Про мене
                  </Typography>
                  <Typography variant="body2">
                     Я створюю найкращі рішення для вашого бізнесу.
                  </Typography>
               </Grid>
               <Grid>
                  <Typography variant="h6" gutterBottom>
                     Контакти
                  </Typography>
                  <Link href="#" variant="body2" display="block">
                     Зв'язатися зі мною
                  </Link>
                  <Link href="#" variant="body2" display="block">
                     Підтримка
                  </Link>
               </Grid>
            </Grid>
            <Box mt={4}>
               <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
               >
                  {"© "}
                  {new Date().getFullYear()} Моя компанія успіху. Всі права
                  захищені.
               </Typography>
            </Box>
         </Container>
      </Box>
   );
};

export default Footer;
