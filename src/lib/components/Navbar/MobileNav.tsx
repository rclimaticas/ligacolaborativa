/* eslint-disable @typescript-eslint/no-unused-vars */
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const drawerWidth = 240;

const navItems = [
  { label: 'Biblioteca', link: '/datarc' },
  { label: 'Registros OndeFoi', link: '/ondefoi' },
  { label: 'Assessoria Sofia', link: 'https://www.espiralds.com/sofia' },
  { label: 'Sobre Nós', link: '/sobre' },
];

export default function MobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box component="div" className="drawer" sx={{ textAlign: 'center' }}>
      <div className="flex w-full items-center justify-between p-4">
        <Image
          alt="Logo"
          width="50"
          height="50"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
        />
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          role="img"
          aria-label="fechar"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            className="font-bold text-black-300"
            key={item.label}
            disablePadding
          >
            <ListItemButton
              sx={{ textAlign: 'start' }}
              component={Link}
              href={item.link}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <div className="mt-5 grid w-full gap-5 p-4 font-bold text-black-300">
        <Link href="/login">
          <div className="flex items-center justify-center rounded-lg border-2 bg-orange p-3 px-5 py-2">
            <a>Login</a>
          </div>
        </Link>
        <Link href="/login">
          <div className="flex items-center justify-center rounded-lg border-2 p-3 px-5 py-2">
            <a>Sign</a>
          </div>
        </Link>
      </div>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#cfd149' }} component="nav">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
              alt="Logo"
              width="50"
              height="50"
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
