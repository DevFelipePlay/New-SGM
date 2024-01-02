import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  IReqPostPlayRedeUsuario,
  IResPostPlayRedeUsuario,
  postPlayRedeUsuario,
} from '../../../../api';
import { FlexBox, MUIDataTableCustom } from '../../../../components';
import useUser from '../../../../hooks/useUser';
import { errorToast } from '../../../../utils';

export function Nivel7() {
  const [loading, setLoading] = useState(false);
  const [responseView, setResponseView] = useState<IResPostPlayRedeUsuario[]>([]);
  const { user } = useUser();

  async function handleView() {
    setLoading(true);

    const payload: IReqPostPlayRedeUsuario = {
      cpf: user?.cpf || '',
    };
    try {
      const data = await postPlayRedeUsuario(payload, 6);
      setResponseView(data);
    } catch (error: any) {
      errorToast(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleView();
  }, []);

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <FlexBox sx={{ gap: 2 }}>
        <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
          <FlexBox
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              textAlign: {
                xs: 'center',
                sm: 'initial',
              },
            }}
          >
            <Typography variant='h4' gutterBottom flexGrow={1} sx={{ mt: 2 }}>
              Usuários de nível 7
            </Typography>
          </FlexBox>
          <MUIDataTableCustom
            title=''
            data={responseView}
            loading={loading}
            columns={[
              {
                name: 'nome',
                label: 'Nome',
              },
              {
                name: 'nivel',
                label: 'Nivel',
              },
              {
                name: 'licenciado',
                label: 'Licenciado',
                options: {
                  customBodyRender: (value) => (
                    <Box sx={{ textAlign: 'center' }}>
                      {' '}
                      {value === true ? 'Licenciado' : 'Sem licença'}
                    </Box>
                  ),
                },
              },

              {
                name: 'graduacao',
                label: 'Graduação',
                options: {
                  customBodyRender: (value) => (
                    <Box sx={{ textAlign: 'center' }}>
                      {' '}
                      {value === null ? 'Sem Graduação' : value}
                    </Box>
                  ),
                },
              },

              {
                name: 'cidade',
                label: 'Cidade',
              },
              {
                name: 'uf',
                label: 'UF',
              },
            ]}
          />
        </Paper>
      </FlexBox>
    </Box>
  );
}