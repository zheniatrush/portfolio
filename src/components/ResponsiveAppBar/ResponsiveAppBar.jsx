import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
   { "About Me": "/" },
   { "My City": "city" },
   { Future: "future" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
   const [anchorElNav, setAnchorElNav] = useState(null);
   const [anchorElUser, setAnchorElUser] = useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar
         position="static"
         elevation={0}
         sx={{
            backgroundColor: "#ffffff",
            borderBottom: "1.5px solid #e0e0e0",
            px: { xs: 2, md: 4 },
            py: 1,
            userSelect: "none",
         }}
      >
         <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: 72 }}>
               {/* Логотип для desktop */}
               <AdbIcon
                  sx={{
                     display: { xs: "none", md: "flex" },
                     mr: 2,
                     fontSize: 32,
                     color: "#1976d2",
                     transition: "transform 0.3s ease",
                     "&:hover": {
                        transform: "rotate(20deg)",
                     },
                     cursor: "pointer",
                  }}
               />
               <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                     mr: 6,
                     display: { xs: "none", md: "flex" },
                     fontFamily: "'Roboto Slab', serif",
                     fontWeight: 900,
                     fontSize: 24,
                     letterSpacing: "0.15em",
                     color: "#1976d2",
                     textDecoration: "none",
                     userSelect: "none",
                     transition: "color 0.3s ease",
                     "&:hover": {
                        color: "#0d47a1",
                     },
                  }}
               >
                  Padding Master
               </Typography>

               {/* Мобільне меню іконка */}
               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="menu"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="primary"
                     sx={{
                        bgcolor: "rgba(25, 118, 210, 0.08)",
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                           bgcolor: "rgba(25, 118, 210, 0.16)",
                        },
                     }}
                  >
                     <MenuIcon fontSize="large" />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiPaper-root": {
                           bgcolor: "#f9f9f9",
                           boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                           borderRadius: 3,
                        },
                     }}
                  >
                     {pages.map((page, i) => {
                        const [label, path] = Object.entries(page)[0];
                        return (
                           <MenuItem
                              key={i}
                              onClick={handleCloseNavMenu}
                              sx={{
                                 borderRadius: 2,
                                 px: 3,
                                 py: 1.5,
                                 mb: 1,
                                 color: "#1976d2",
                                 fontWeight: 600,
                                 fontSize: 16,
                                 transition: "background-color 0.3s ease",
                                 "&:hover": {
                                    bgcolor: "rgba(25, 118, 210, 0.12)",
                                 },
                              }}
                           >
                              <Link
                                 to={path}
                                 style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    width: "100%",
                                 }}
                              >
                                 {label}
                              </Link>
                           </MenuItem>
                        );
                     })}
                  </Menu>
               </Box>

               {/* Логотип для mobile */}
               <AdbIcon
                  sx={{
                     display: { xs: "flex", md: "none" },
                     mr: 1,
                     fontSize: 28,
                     color: "#1976d2",
                  }}
               />
               <Typography
                  variant="h5"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                     mr: 2,
                     display: { xs: "flex", md: "none" },
                     flexGrow: 1,
                     fontFamily: "'Roboto Slab', serif",
                     fontWeight: 900,
                     fontSize: 20,
                     letterSpacing: "0.1em",
                     color: "#1976d2",
                     textDecoration: "none",
                     userSelect: "none",
                  }}
               >
                  MODERN BRAND
               </Typography>

               {/* Меню для desktop */}
               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page, i) => {
                     const [label, path] = Object.entries(page)[0];
                     return (
                        <Button
                           key={i}
                           onClick={handleCloseNavMenu}
                           sx={{
                              mx: 1,
                              color: "#1976d2",
                              fontWeight: 600,
                              fontSize: 16,
                              borderRadius: 3,
                              textTransform: "none",
                              px: 3,
                              py: 1.25,
                              transition: "all 0.3s ease",
                              boxShadow: "none",
                              border: "2px solid transparent",
                              "&:hover": {
                                 bgcolor: "#e3f2fd",
                                 borderColor: "#1976d2",
                                 boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                              },
                           }}
                        >
                           <Link
                              to={path}
                              style={{ textDecoration: "none", color: "inherit" }}
                           >
                              {label}
                           </Link>
                        </Button>
                     );
                  })}
               </Box>

               {/* Аватарка і меню користувача */}
               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                     <IconButton
                        onClick={handleOpenUserMenu}
                        sx={{
                           p: 0,
                           borderRadius: "50%",
                           transition: "all 0.3s ease",
                           border: "2px solid transparent",
                           "&:hover": {
                              borderColor: "#1976d2",
                              bgcolor: "#e3f2fd",
                              transform: "scale(1.1)",
                           },
                        }}
                     >
                        <Avatar
                           alt="avatar"
                           src="https://avatars.githubusercontent.com/u/150155027?s=96&v=4"
                           sx={{ width: 40, height: 40 }}
                        />
                     </IconButton>
                  </Tooltip>
                  <Menu
                     sx={{ mt: "45px" }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                     PaperProps={{
                        sx: {
                           bgcolor: "#f9f9f9",
                           boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                           borderRadius: 3,
                           minWidth: 180,
                        },
                     }}
                  >
                     {settings.map((setting) => (
                        <MenuItem
                           key={setting}
                           onClick={handleCloseUserMenu}
                           sx={{
                              borderRadius: 2,
                              px: 3,
                              py: 1.5,
                              color: "#1976d2",
                              fontWeight: 600,
                              fontSize: 15,
                              transition: "background-color 0.3s ease",
                              "&:hover": {
                                 bgcolor: "#e3f2fd",
                              },
                           }}
                        >
                           {setting}
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}

export default ResponsiveAppBar;
