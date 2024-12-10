import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import ideaLogo from "../../assets/IdeaLogoNoBg.png";
import StopsMenu from "../stops-menu/StopsMenu";
import CurrencyMenu from "../currency-menu/CurrencyMenu";
import styles from "./Header.module.css";
function Header() {
  const [openStopsMenu, setOpenStopsMenu] = useState(false);
  const [openCurrencyMenu, setOpenCurrencyMenu] = useState(false);

  const toggleStopsMenu = (newOpen: boolean) => () => {
    setOpenStopsMenu(newOpen);
  };

  const toggleCurrencyMenu = (newOpen: boolean) => () => {
    setOpenCurrencyMenu(newOpen);
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  useEffect(() => {
    if (openStopsMenu || openCurrencyMenu) {
      handleCloseNavMenu();
    }
  }, [openStopsMenu, openCurrencyMenu]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AirplaneTicketOutlinedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            АВИАБИЛЕТЫ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={toggleStopsMenu(true)}>
                <Typography sx={{ textAlign: "center" }}>Пересадки</Typography>
              </MenuItem>
              <MenuItem onClick={toggleCurrencyMenu(true)}>
                <Typography sx={{ textAlign: "center" }}>Валюта</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AirplaneTicketOutlinedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            АВИАБИЛЕТЫ
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Button
                onClick={toggleStopsMenu(true)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Пересадки
              </Button>
              <Button
                onClick={toggleCurrencyMenu(true)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Валюта
              </Button>
            </Box>
            <a
              className={styles.link}
              href="https://ideaplatform.ru/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Idea Platform (opens in a new tab)"
            >
              Тестовое задание для
              <img
                src={ideaLogo}
                alt="Логотип Идея"
                width={50}
                height={50}
                className={styles.idea}
              />
            </a>
          </Box>
        </Toolbar>
      </Container>
      <StopsMenu open={openStopsMenu} toggleDrawer={toggleStopsMenu} />
      <CurrencyMenu open={openCurrencyMenu} toggleDrawer={toggleCurrencyMenu} />
    </AppBar>
  );
}
export default Header;
