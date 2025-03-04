/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */

'use client';

import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import SearchIcon from '@mui/icons-material/Search';
import {
  Modal,
  Box,
  Typography,
  TextField,
  CircularProgress,
  FormGroup,
  FormLabel,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import type {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { toast } from 'react-toastify';

import Table from '@/lib/components/User/Impact/Table';
import { saveImpactData } from '@/services/ImpactsStorage';
import {
  removeUserData,
  updateUserData,
  getUserData,
} from '@/services/UserStorage';

interface Impact {
  id: string;
  subject: string;
  locality: string;
  support: string;
  urgency: number;
  affectedCommunity: string[];
  biomes: string[];
  situation: string;
  contribution: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { sm: 560, xs: 260 },
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const customCheckboxStyles = {
  '&.Mui-checked': {
    color: '#cfd149',
  },
};

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

const ImpactComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [subject, setSubject] = useState('');
  const [locality, setLocality] = useState('');
  const [urgency, setUrgency] = useState('');
  const [support, setSupport] = useState('');
  const [affectedCommunity, setAffectedCommunity] = useState<string[]>([]);
  const [biomes, setBiomes] = useState<string[]>([]);
  const [situation, setSituation] = useState('');
  const [contribution, setContribution] = useState('');
  const handleClose = () => setOpenModal(null);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleOpen = (modal: string) => setOpenModal(modal);

  const handleUserImpact = async (data: Partial<Impact>) => {
    setIsLoadingButton(true);
    try {
      // Salvar os dados localmente antes de enviar
      await saveImpactData('userImpact', data);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/impacts`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao enviar impacto');
      }

      window.location.reload();
    } catch (error) {
      toast.error('Erro ao salvar os dados!', {
        position: 'top-right',
        autoClose: 2000,
      });
      console.error('Erro ao salvar os dados do impacto:', error);
    } finally {
      setIsLoadingButton(false);
    }
  };

  const handleSaveImpact = () =>
    handleUserImpact({
      subject,
      locality,
      support,
      affectedCommunity,
      biomes,
      situation,
      contribution,
    });

  const handleBiomesCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (e.target.checked) {
      setBiomes((prev) => [...prev, value]);
    } else {
      setBiomes((prev) => prev.filter((item) => item !== value));
    }
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
  return (
    <div className="flex flex-col space-y-5">
      <div className="grid rounded-2xl border-2 bg-white p-2 shadow-xl">
        <div className="flex grid w-full items-center px-3">
          <div className="flex w-full flex-col items-center justify-center space-y-2 md:flex-row md:justify-between">
            <div>
              <p className="text-center text-xl font-bold text-black-300 md:text-left">
                Seus impactos gerais
              </p>
              <p className="text-md w-full text-center font-light opacity-50 md:text-left">
                Os impactos serão listados aqui em ordem cronológica.
              </p>
            </div>
            <div className="mt-5 flex grid w-full grid-cols-1 items-center justify-center gap-2 md:w-[360px] md:grid-cols-2 md:justify-end">
              {/* <div className="inline-flex items-center justify-center rounded-full border-2 w-min">
                <ReplaySharpIcon sx={{ fontSize: 30 }} />
              </div> */}

              <button
                disabled
                className="flex items-center justify-center rounded-3xl border-2 px-5 py-2 opacity-50"
              >
                <p className="font-bold text-black-300">Excluir</p>
              </button>
              <button
                onClick={() => handleOpen('impact')}
                className="flex w-full items-center justify-center rounded-3xl border-2 bg-orange px-5 py-2"
              >
                <p className="font-bold text-black-300">Criar Impacto</p>
              </button>
              <Modal open={openModal === 'impact'} onClose={handleClose}>
                <Box sx={{ ...style, position: 'relative' }}>
                  {/* Ícone de Fechar (X) */}
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-black absolute left-2 top-2 mb-5"
                  >
                    <IoArrowBack size={40} color="#cfd149" />
                  </button>

                  {/* Título */}
                  <Typography
                    sx={{ marginTop: '30px' }}
                    id="modal-modal-title"
                    variant="h6"
                  >
                    Criar Impacto
                  </Typography>

                  {/* Descrição */}
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2, mb: 2 }}
                  >
                    Crie um impacto e compartilhe com os membros que fazem parte
                    da Liga Colaborativa ds Povos.
                  </Typography>
                  <div className="grid grid-cols-1 gap-3">
                    <CustomTextField
                      id="subject"
                      name="subject"
                      label="Assunto"
                      variant="outlined"
                      fullWidth
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />

                    <CustomTextField
                      id="locality"
                      name="locality"
                      label="Localidade/Município/Estado"
                      variant="outlined"
                      fullWidth
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                    />
                    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">
                          Urgência
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="urgency"
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value)}
                        >
                          <MenuItem value={10}>10 minutos</MenuItem>
                          <MenuItem value={30}>30 minutos</MenuItem>
                          <MenuItem value={60}>60 minutos</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">
                          Tipo de Apoio
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Tipo de Apoio"
                          value={support}
                          onChange={(e) => setSupport(e.target.value)}
                        >
                          <MenuItem value="financeiro">Financeiro</MenuItem>
                          <MenuItem value="técnico">Técnico</MenuItem>
                          <MenuItem value="logístico">Logístico</MenuItem>
                          <MenuItem value="incidência">Incidência</MenuItem>
                          <MenuItem value="psicoemocional">
                            Psicoemocional
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">
                          Comunidade afetada
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Comunidade afetada"
                          value={affectedCommunity}
                          onChange={(e) =>
                            setAffectedCommunity(
                              Array.isArray(e.target.value)
                                ? e.target.value
                                : [e.target.value]
                            )
                          }
                        >
                          {(Array.isArray(user?.themesCommunities)
                            ? user?.themesCommunities
                            : []
                          ).map((option: string) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">
                          Situação a ser resolvida
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Age"
                          value={situation}
                          onChange={(e) => setSituation(e.target.value)}
                        >
                          {[
                            'Violação de direitos',
                            'Empreendimento abusivo',
                            'Desmatamento',
                            'Invasão do território',
                            'Abuso de poder',
                            'Agressão',
                            'Situação anormal',
                            'Falta de informação',
                            'Animal silvestre encontrado',
                            'Queimada ou incêndio',
                            'Poluição do rio',
                            'Poluição do solo',
                            'Poluição do mar',
                            'Poluição do ar',
                            'Situação climática extrema',
                          ].map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl fullWidth>
                        <FormLabel
                          sx={{ mb: 1, fontWeight: 'normal', color: 'black' }}
                        >
                          Bioma
                        </FormLabel>
                        <FormGroup
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 2,
                          }}
                        >
                          {(Array.isArray(user?.themesBiomes)
                            ? user?.themesBiomes
                            : []
                          ).map((option: string) => (
                            <div
                              key={option}
                              className="flex items-center gap-2"
                            >
                              <Checkbox
                                checked={biomes.includes(option)}
                                onChange={(e) =>
                                  handleBiomesCheckboxChange(e, option)
                                }
                                sx={customCheckboxStyles}
                              />
                              <label className="text-gray-700 text-sm font-semibold">
                                {option}
                              </label>
                            </div>
                          ))}
                        </FormGroup>
                      </FormControl>
                    </div>
                    <CustomTextField
                      id="contribution"
                      name="contribution"
                      label="Contribuição"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={contribution}
                      onChange={(e) => setContribution(e.target.value)}
                      rows={6}
                    />
                  </div>

                  {/* Botões "Cancelar" e "Salvar" */}
                  <div className="mt-5 flex w-full items-center justify-end gap-3">
                    <button
                      className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2 font-bold"
                      onClick={handleClose}
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSaveImpact}
                      className="rounded-lg border-2 bg-orange p-2 font-bold"
                    >
                      {isLoadingButton ? (
                        <CircularProgress size="30px" />
                      ) : (
                        'Salvar'
                      )}
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          <Paper
            component="form"
            className="mt-2 rounded-2xl border-2"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { md: 300, xs: '100%' },
            }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Encontrar impactos"
              inputProps={{ 'aria-label': 'search impacts' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Paper>
        </div>
        <Table searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default ImpactComponent;
