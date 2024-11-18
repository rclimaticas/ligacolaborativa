/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type React from 'react';
import { useState } from 'react';

import Account from '@/lib/components/User/Account';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [selectedItem, setSelectedItem] = useState('Conta');
  const iconMap: { [key: string]: React.ReactNode } = {
    Conta: <AccountCircleOutlinedIcon />,
    'Área do Colaborador': <DeveloperBoardOutlinedIcon />,
    'Meus Impactos': <FingerprintOutlinedIcon />,
    'All mail': <InboxIcon />,
    Trash: <MailIcon />,
    Spam: <MailIcon />,
  };

  const contentMap: { [key: string]: React.ReactNode } = {
    Conta: <Account />,
    Starred: 'Este é o conteúdo de Starred.',
    'Send email': 'Este é o conteúdo de Send email.',
    Drafts: 'Este é o conteúdo de Drafts.',
    'All mail': 'Este é o conteúdo de All mail.',
    Trash: 'Este é o conteúdo de Trash.',
    Spam: 'Este é o conteúdo de Spam.',
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="bg-orange"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="text-black-300"
          >
            Área do Usuário
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Conta', 'Área do Colaborador', 'Meus Impactos'].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => setSelectedItem(text)}>
                  <ListItemIcon>{iconMap[text] || <InboxIcon />} </ListItemIcon>

                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setSelectedItem(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          {selectedItem}
        </Typography>
        <Typography>
          {contentMap[selectedItem as keyof typeof contentMap] ||
            'Selecione um item para visualizar o conteúdo.'}
        </Typography>
      </Box>
    </Box>
  );
}
