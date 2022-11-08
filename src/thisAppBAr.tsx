import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from "@mui/material/Box";

const ThisAppBAr = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{width:"100%", minHeight:"60px"}} >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
              <h4>
            hammerdirt!
              </h4>
          </Box>

              <h4>
              check it:
              </h4>
      <IconButton
              size="large"
              aria-label="link to repo"
              aria-controls="menu-appbar"
              aria-haspopup="false"
              href="https://github.com/hammerdirt-dev/hammerdirt_home"

              color="inherit"
            >
              <GitHubIcon sx={{fontSize:36}}/>
            </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default ThisAppBAr;

