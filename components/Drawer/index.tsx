import React, { useState } from 'react';
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PublicIcon from '@mui/icons-material/Public';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import DevicesIcon from '@mui/icons-material/Devices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';

type Props = {
  pages: string[];
};

const Drawer: React.FC<Props> = ({ pages }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerWidth = 200;
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsMenuOpen(open);
    };

  const menuItemIcon = [
    <AccessTimeFilledIcon />,
    <WhatshotIcon />,
    <HowToVoteIcon />,
    <ConnectWithoutContactIcon />,
    <PublicIcon />,
    <SportsEsportsIcon />,
    <NightlifeIcon />,
    <DevicesIcon />,
    <AttachMoneyIcon />,
    <SportsBaseballIcon />,
  ];

  const list = () => (
    <Box
      sx={{ width: drawerWidth, mt: '64px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page, index) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <ListItemIcon>{menuItemIcon[index]}</ListItemIcon>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(!isMenuOpen)}
        color="secondary"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </Box>
  );
};

export default Drawer;
