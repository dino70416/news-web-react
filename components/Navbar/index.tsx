import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import Drawer from '../Drawer';
import SearchBar from '../SearchBar';

const pages = [
  '即時',
  '熱門',
  '政治',
  '社會',
  '國際',
  '娛樂',
  '生活',
  '科技',
  '財經',
  '體育',
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type Props = {
  title: string;
};

const Navbar: React.FC<Props> = ({ title }) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* screen logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'secondary.main',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>

          {/* mobile menu */}
          <Drawer pages={pages} />

          {/* mobile logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'secondary.main',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>

          {/* screen menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <SearchBar />
            {pages.map(page => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  color: 'secondary.main',
                  display: 'block',
                  minHeight: '64px',
                  fontSize: '16px',
                  px: '24px',
                  ':hover': {
                    backgroundColor: 'primary.light',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* user settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
