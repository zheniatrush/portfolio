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
      <div>
         <Box sx={{ py: 5, px: 3, minHeight: "100vh", background: "#f0f4ff" }}>
            <Typography
               variant="h4"
               align="center"
               sx={{ fontWeight: "bold", mb: 4, color: "#1a237e" }}
            >
               🚀 Моє Майбутнє
            </Typography>

            <Card
               sx={{
                  maxWidth: 800,
                  mx: "auto",
                  mb: 5,
                  background: "#e3f2fd",
                  borderRadius: 3,
               }}
            >
               <CardContent>
                  <Typography variant="h6" gutterBottom>
                     💡 Мотиваційна фраза:
                  </Typography>
                  <Typography variant="h5" fontStyle="italic" color="primary">
                     “Успіх приходить до тих, хто не боїться почати з нуля і не
                     зупиняється на півдорозі.”
                  </Typography>
               </CardContent>
            </Card>

            <Box sx={{ maxWidth: 900, mx: "auto", mb: 5 }}>
               <Typography variant="h6" gutterBottom>
                  📈 3 кроки до мрії:
               </Typography>
               <Timeline position="alternate">
                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineDot color="primary">
                           <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent>
                        <Typography variant="subtitle1" fontWeight="bold">
                           1. Освоїти сучасні технології
                        </Typography>
                        <Typography variant="body2">
                           Глибоко вивчити JavaScript, React, Node.js, та бази
                           даних.
                        </Typography>
                     </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineDot color="secondary">
                           <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent>
                        <Typography variant="subtitle1" fontWeight="bold">
                           2. Стажування або робота в IT-компанії
                        </Typography>
                        <Typography variant="body2">
                           Набути практичного досвіду в реальних проєктах.
                        </Typography>
                     </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineDot color="success">
                           <RocketLaunchIcon />
                        </TimelineDot>
                     </TimelineSeparator>
                     <TimelineContent>
                        <Typography variant="subtitle1" fontWeight="bold">
                           3. Стати професіоналом та надихати інших
                        </Typography>
                        <Typography variant="body2">
                           Працювати в міжнародній компанії або створити власний
                           продукт.
                        </Typography>
                     </TimelineContent>
                  </TimelineItem>
               </Timeline>
            </Box>

            <Grid
               container
               spacing={4}
               justifyContent="center"
               alignItems="stretch"
            >
               <Grid item xs={12} md={6}>
                  <Card
                     sx={{
                        height: "100%",
                        borderRadius: 3,
                        background: "#fffde7",
                     }}
                  >
                     <CardContent>
                        <Typography variant="h6" gutterBottom>
                           🎯 Робота мрії:
                        </Typography>
                        <Typography variant="body1">
                           Хочу стати Frontend-розробником, який створює не
                           просто інтерфейси, а приємний досвід для користувача.
                           Мене надихає можливість поєднувати дизайн і
                           технології, працювати в команді і розвиватись щодня.
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>

               <Grid item xs={12} md={6}>
                  <Card sx={{ height: "100%", borderRadius: 3 }}>
                     <CardContent>
                        <Typography variant="h6" gutterBottom>
                           🌟 Візуальне натхнення:
                        </Typography>
                        <img
                           src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                           alt="Inspiration"
                           style={{ width: "100%", borderRadius: 12 }}
                        />
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default MyFuture;
