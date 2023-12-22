import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { postPlaySaqueUsuario } from '../../../../../api';
import {
  IReqPostPlayExtratoFinanceiro,
  IResPostPlayExtratoFinanceiro,
  postPlayExtratoFinanceiro,
} from '../../../../../api/ApisUtils/ExtratoFinanceiro';
import { IResPostPlaySaqueUsuario } from '../../../../../api/ApisUtils/SaqueUsuario/IResPostPlaySaqueUsuario';
import { Cards, FlexBox, MUIDataTableCustom } from '../../../../../components';
import { currencyFormatter, dateFormatter, errorToast } from '../../../../../utils';
import useUser from '../../../../hooks/useUser';

export default function ExtratoFinanceiro() {
  const [loading, setLoading] = useState(false);
  const [responseView, setResponseView] = useState<IResPostPlayExtratoFinanceiro[]>([]);
  const [responseSaldo, setResponseSaldo] = useState<IResPostPlaySaqueUsuario>();
  const { user } = useUser();

  async function handleView() {
    setLoading(true);

    const payload: IReqPostPlayExtratoFinanceiro = {
      cpf: user?.cpf || '',
    };
    try {
      const data = await postPlayExtratoFinanceiro(payload);
      setResponseView(data);
    } catch (error: any) {
      errorToast(error);
    }

    try {
      const dataSaldo = await postPlaySaqueUsuario(payload);
      setResponseSaldo(dataSaldo);
    } catch (error: any) {
      errorToast(error);
    }
  }

  useEffect(() => {
    handleView();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <FlexBox sx={{ gap: 2 }}>
        <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
          <FlexBox sx={{ flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant='h4' gutterBottom flexGrow={1} sx={{ mt: 2 }}>
              Extrato Financeiro
            </Typography>
          </FlexBox>
          <MUIDataTableCustom
            title=''
            data={responseView}
            columns={[
              {
                name: 'data',
                label: 'Data',
                options: {
                  customBodyRender: (value) => dateFormatter(value),
                },
              },
              {
                name: 'descricao',
                label: 'Descrição',
              },
              {
                name: 'tipo',
                label: 'Tipo',
                options: {
                  customBodyRender: (value) => (
                    <Box
                      sx={{
                        backgroundColor: value === 'Débito' ? '#dac700' : 'green',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        borderRadius: '15px',
                      }}
                    >
                      <Typography sx={{ p: 0.2 }}>{value}</Typography>
                    </Box>
                  ),
                },
              },
              {
                name: 'valor',
                label: 'Valor',
                options: {
                  customBodyRender: (value) => currencyFormatter(value),
                },
              },
            ]}
          />
        </Paper>

        <Cards title={'Saldo Total'} subTitle={'Saldo da sua conta'} size={'40%'}>
          <Typography variant='h4'>{currencyFormatter(responseSaldo?.saldo_disponivel)}</Typography>
        </Cards>
      </FlexBox>
    </Box>
  );
}
