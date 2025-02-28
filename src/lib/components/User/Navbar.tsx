/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */

'use client';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

import Account from '@/lib/components/User/Account/Account';
import Colaborate from '@/lib/components/User/Colaborate/Colaborate';
import Impact from '@/lib/components/User/Impact/index';
import { getUserData } from '@/services/UserStorage';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(
    localStorage.getItem('selectedTab') || 'Conta'
  );
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Alterna o estado do menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Função para voltar para a home
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const storedUser = await getUserData();
        if (storedUser) {
          console.log('Dados do usuário carregados:', storedUser);
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();
  }, []);

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
    'Área do Colaborador': <Colaborate />,
    'Meus Impactos': <Impact />,
    'Send email': 'Este é o conteúdo de Send email.',
    Drafts: 'Este é o conteúdo de Drafts.',
  };

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedItem(storedTab);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setSelectedItem(tab);
    localStorage.setItem('selectedTab', tab);
  };

  const drawerContent = (
    <div>
      <div className="flex w-full items-center justify-center p-4">
        <Image
          alt="Logo"
          width="60"
          height="60"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
        />
      </div>
      <Divider />
      <List>
        {['Conta', 'Área do Colaborador', 'Meus Impactos'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleTabChange(text);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                backgroundColor:
                  selectedItem === text ? '#f0f0f0' : 'transparent',
                '&:hover': {
                  backgroundColor:
                    selectedItem === text ? '#e0e0e0' : '#f0f0f0',
                },
              }}
            >
              <ListItemIcon>{iconMap[text] || <InboxIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <button onClick={handleBackToHome} className="w-full">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IoArrowBack />
              </ListItemIcon>
              Início
            </ListItemButton>
          </ListItem>
        </button>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#cfd149' }}
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="text-black-300"
          >
            {isLoading ? (
              <p>Olá, visitante!</p>
            ) : user && user.name !== 'Default Name' ? (
              <p className="font-sans font-bold">Área do {user.name}</p>
            ) : (
              'Área do Usuário'
            )}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer para desktop */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          display: { xs: 'none', md: 'block' },
        }}
        variant="permanent"
        anchor="left"
        open
      >
        {drawerContent}
      </Drawer>

      {/* Drawer para mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: drawerWidth },
          display: { xs: 'block', md: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography>
          {selectedItem === null ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CircularProgress />
            </Box>
          ) : contentMap[selectedItem as keyof typeof contentMap] ? (
            contentMap[selectedItem as keyof typeof contentMap]
          ) : (
            'Conteúdo não encontrado'
          )}
        </Typography>
      </Box>
    </Box>
  );
}
