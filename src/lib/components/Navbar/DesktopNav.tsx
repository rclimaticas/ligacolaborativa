/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-nested-ternary */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable jsx-a11y/anchor-is-valid */

// import Avatar from '@mui/material/Avatar';
// import Chip from '@mui/material/Chip';
// import CircularProgress from '@mui/material/CircularProgress';
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   Link,
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
// } from '@nextui-org/react';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';

// import { getUserData, saveUserData } from '@/services/UserStorage';

// export default function App() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [user, setUser] = useState<any>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Falha ao buscar dados do usuário.');
//       }

//       const userData = await response.json();

//       const userWithTimestamp = {
//         ...userData,
//         timestamp: Date.now(),
//       };

//       await saveUserData('user', userWithTimestamp);
//       setUser(userData);
//     } catch (error) {
//       console.error('Erro ao buscar dados do usuário:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const initializeUser = async () => {
//       const storedUser = await getUserData('user');
//       const fiveMinutesInMs = 5 * 60 * 1000;

//       if (storedUser) {
//         const currentTime = Date.now();

//         if (currentTime - storedUser.timestamp < fiveMinutesInMs) {
//           setUser(storedUser);
//           setIsLoading(false);
//         } else {
//           fetchUserData();
//         }
//       } else {
//         fetchUserData();
//       }
//     };

//     initializeUser();
//   }, []);

//   return (
//     <Navbar
//       className={`duration-2000 fixed z-50 h-[80px] bg-white p-5 transition-shadow ${isScrolled ? 'shadow-xl' : ''}`}
//       onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
//     >
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <Image
//             alt="Logo"
//             width="50"
//             height="50"
//             src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
//           />
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden gap-4 font-bold text-black-300 sm:flex"
//         justify="center"
//       >
//         <Link color="foreground" href="#">
//           <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
//             Biblioteca
//           </NavbarItem>
//         </Link>
//         <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
//           <Link color="foreground" href="/ondefoi">
//             Registros OndeFoi
//           </Link>
//         </NavbarItem>
//         <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
//           <Link color="foreground" href="https://www.espiralds.com/sofia">
//             Assessoria Sofia
//           </Link>
//         </NavbarItem>
//         <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
//           <Link color="foreground" href="/ligacolaborativa">
//             Sobre Nós
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end" className="font-bold text-black-300">
//         {isLoading ? (
//           <CircularProgress color="success" />
//         ) : user ? (
//           <Dropdown>
//             <DropdownTrigger>
//               <Chip
//                 sx={{ backgroundColor: 'orange' }}
//                 avatar={
//                   <Avatar
//                     alt={user.username || 'Usuário'}
//                     src={user.imageBase64 || ''}
//                   />
//                 }
//                 label={user.username || 'Usuário'}
//                 variant="outlined"
//               />
//             </DropdownTrigger>
//             <DropdownMenu
//               className="rounded-lg border-2 bg-orange p-2"
//               aria-label="User Menu"
//             >
//               <DropdownItem key="profile">Perfil</DropdownItem>
//               <DropdownItem key="logout">Sair</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//         ) : (
//           <>
//             <Link href="/login">
//               <NavbarItem className="flex w-full items-center justify-center rounded-lg border-2 bg-orange px-5 py-2">
//                 Entrar
//               </NavbarItem>
//             </Link>
//             <Link href="/register">
//               <NavbarItem className="flex w-full items-center justify-center rounded-lg bg-white px-5 py-2">
//                 Cadastrar
//               </NavbarItem>
//             </Link>
//           </>
//         )}
//       </NavbarContent>
//     </Navbar>
//   );
// }

/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { getUserData, logout } from '@/services/UserStorage';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const storedUser = await getUserData('user');
        if (storedUser) {
          console.log('Dados do usuário carregados:', storedUser); // Adicionado aqui
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

  return (
    <Navbar
      className={`duration-2000 fixed z-50 h-[80px] bg-white p-5 transition-shadow ${
        isScrolled ? 'shadow-xl' : ''
      }`}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onMenuOpenChange={(isOpen) => {}}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isScrolled ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            alt="Logo"
            width="50"
            height="50"
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 font-bold text-black-300 sm:flex"
        justify="center"
      >
        <Link color="foreground" href="#">
          <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
            Biblioteca
          </NavbarItem>
        </Link>
        <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
          <Link color="foreground" href="/ondefoi">
            Registros OndeFoi
          </Link>
        </NavbarItem>
        <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
          <Link color="foreground" href="https://www.espiralds.com/sofia">
            Assessoria Sofia
          </Link>
        </NavbarItem>
        <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
          <Link color="foreground" href="/ligacolaborativa">
            Sobre Nós
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="font-bold text-black-300">
        {isLoading ? (
          <CircularProgress color="success" />
        ) : user ? (
          <Dropdown>
            <DropdownTrigger>
              <Chip
                className="hover:bg-orange"
                avatar={
                  <Avatar
                    alt={user.username || 'Usuário'}
                    src={user.imageBase64 || ''}
                  />
                }
                label={user.username || 'Usuário'}
                variant="outlined"
              />
            </DropdownTrigger>
            <DropdownMenu
              className="rounded-lg border-2 bg-orange p-2"
              aria-label="User Menu"
            >
              <DropdownItem
                key="profile"
                href="/user"
                className="hover:text-white"
              >
                Perfil
              </DropdownItem>
              <DropdownItem
                className="hover:text-white"
                onPress={logout}
                key="logout"
              >
                Sair
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <Link href="/login">
              <NavbarItem className="flex w-full items-center justify-center rounded-lg border-2 bg-orange px-5 py-2">
                Entrar
              </NavbarItem>
            </Link>
            <Link href="/register">
              <NavbarItem className="flex w-full items-center justify-center rounded-lg bg-white px-5 py-2">
                Cadastrar
              </NavbarItem>
            </Link>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
