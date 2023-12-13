import { Logout, Settings } from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { CSSProperties, ReactNode, useContext, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { RiNotificationLine } from 'react-icons/ri';
import { AuthContext, SearchInput } from '..';
import useUser from '../../hooks/useUser';

import { useNavigate } from 'react-router-dom';
import { IReqPostPlayListaDeSolicitacoes, postPlayListaDeSolicitacoes } from '../../api';
import { ExtrairLetras } from '../../utils';

interface IDefaultCOntainer {
  page: string;
  title: string;
  subTitle: string;
  showSearch: boolean;
  showAvatar: boolean;
  children: ReactNode;
}

export function DefaultContainer({
  page,
  title,
  subTitle,
  showSearch,
  showAvatar,
  children,
}: IDefaultCOntainer) {
  const displayFlexComponent: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const contentStyles: CSSProperties = {
    paddingLeft: '100px ',
    paddingRight: '20px ',
    transition: 'margin-left 0.3s, margin-right 0.3s, max-width 0.3s',
    height: '100vh',
    backgroundColor: 'white',
    overflowY: 'auto',
  };
  const defaultContent: CSSProperties = {
    ...displayFlexComponent,
    flexDirection: 'column',
    marginTop: '2rem',
    padding: '0px 40px 0px 100px',
  };

  const { user } = useUser();
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  /////// Menu  Perfil///////
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ////////////
  /////// Menu  Perfil///////
  const [anchorElNotification, setAnchorElNotification] = useState<null | HTMLElement>(null);
  const openNotification = Boolean(anchorElNotification);
  const handleClickNotification = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };
  ////////////

  const [quantidadeItens, setQuantidadeItens] = useState(0);

  async function calcularNotificacoes() {
    try {
      const payload: IReqPostPlayListaDeSolicitacoes = {
        token: user?.token || '',
      };
      const data = await postPlayListaDeSolicitacoes(payload);

      if (data && Array.isArray(data)) {
        setQuantidadeItens(data.length);
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (user?.super) {
      calcularNotificacoes();

      const intervalId = setInterval(() => {
        calcularNotificacoes();
      }, 30 * 60 * 1000);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <Grid>
      <Box
        sx={{
          width: '100%',
          py: '1rem',
          ...contentStyles,
          backgroundColor: 'var(--backGround-header-color)',
          height: 'auto',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:
              showAvatar === false && showSearch === false ? 'center' : 'space-between',
            height: 'auto',
          }}
        >
          <Typography sx={{ color: 'var(--text-color)', fontSize: '1.3rem' }}>{page}</Typography>

          {showSearch && (
            <SearchInput icon={<AiOutlineSearch />} placeholder={'Buscar'} rest={undefined} />
          )}
          {showAvatar && (
            <Box sx={{ ...displayFlexComponent }}>
              <Tooltip title='Notificações'>
                <IconButton onClick={handleClickNotification}>
                  <Badge
                    badgeContent={quantidadeItens}
                    color='error'
                    sx={{ marginRight: '0.5rem' }}
                  >
                    <RiNotificationLine
                      style={{ color: 'var(--text-color)', fontSize: '1.3rem' }}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title='Account settings'>
                <IconButton
                  onClick={handleClick}
                  size='small'
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 40, height: 40, mr: 1 }}>
                    <ExtrairLetras nome={user?.name} />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Box>
                <Typography sx={{ color: 'var(--text-color)' }}>
                  {user ? user.name : 'Bem Vindo'}
                </Typography>
                <Typography
                  sx={{ color: 'var(--sub-text-color)', fontSize: '12px' }}
                  variant='subtitle2'
                >
                  Nivel de usuário:{' '}
                  {(user?.profileid_multinivel === 1 && 'Admin') ||
                    (user?.profileid_multinivel === 7 && 'Multinivel')}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ color: 'var(--text-color)' }} variant='h3'>
            {title}
          </Typography>
          <Typography sx={{ color: 'var(--sub-text-color)' }} variant='subtitle2'>
            {subTitle}
          </Typography>
        </Box>
      </Box>
      {/* Content */}
      <Box sx={defaultContent}>{children}</Box>
      {/* /////// */}

      {/* MENU Notificação */}
      <Menu
        anchorEl={anchorElNotification}
        id='account-menu'
        open={openNotification}
        onClose={handleCloseNotification}
        onClick={handleCloseNotification}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 22,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {quantidadeItens !== 0 ? (
          <MenuItem
            onClick={() => {
              handleClose;
              navigate('/solicitacoes-saque');
            }}
          >
            <ListItemIcon>
              <FaMoneyBillTransfer />
            </ListItemIcon>
            Solicitações de Saques Pendentes
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>Não há notificações</MenuItem>
        )}
        {/* <Divider />
        <MenuItem
          onClick={() => {
            handleClose;
            signOut();
          }}
        >
          <ListItemIcon>
            <LiaAwardSolid />
          </ListItemIcon>
          Solicitação de Premios pendentes
        </MenuItem> */}
      </Menu>
      {/* /////////////// */}

      {/* MENU Perfils */}
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 30,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Configurações
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose;
            signOut();
          }}
          sx={{ color: 'red' }}
        >
          <ListItemIcon>
            <Logout fontSize='small' sx={{ color: 'red' }} />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
      {/* ///////////////// */}
    </Grid>
  );
}
