import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import {
  IReqPostPlayListaSolicitacaoVendaChipConcluido,
  IResPostPlayListaSolicitacaoVendaChipConcluido,
  postPlayListaSolicitacaoVendaChipConcluido,
} from '../../../../../api';
import { ListHistoricoSolicitacoesPacotes, Loading } from '../../../../../components';
import useUser from '../../../../../hooks/useUser';

export function HistoricoPacotesParceiro() {
  const [loading, setLoading] = useState(false);
  const [responseList, setResponseList] = useState<
    IResPostPlayListaSolicitacaoVendaChipConcluido[]
  >([]);
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  async function handleListRedeDeUsuarioMMN() {
    setLoading(true);

    const payload: IReqPostPlayListaSolicitacaoVendaChipConcluido = {
      token: user?.token || '',
    };
    try {
      const data = await postPlayListaSolicitacaoVendaChipConcluido(payload);
      setResponseList(data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handlePageChange = (
    //@ts-ignore
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const renderPaginatedList = () => {
    const reversedList = [...responseList].reverse();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = reversedList.slice(startIndex, endIndex);

    return paginatedItems.map((item, index) => (
      <Box sx={{ width: '100%' }} key={index}>
        <ListHistoricoSolicitacoesPacotes
          nome={item.name}
          dataPagamento={item.data_pagamento}
          endereco={item.endereco}
          id={item.ID}
          nomePremio={item.tipo_fatura}
          cod={item.codigo_rastreio}
        />
      </Box>
    ));
  };

  useEffect(() => {
    handleListRedeDeUsuarioMMN();
    console.log(responseList);
  }, []);

  return (
    <>
      {!loading && responseList.length === 0 ? (
        <>
          <Box
            sx={{
              width: '100%',
              m: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: {
                xs: 'center',
                sm: 'inherit',
              },
            }}
          >
            <Typography variant='h4'>Histórico de solicitações de Pacotes</Typography>
          </Box>
          <Typography
            variant='h5'
            sx={{
              mt: 10,
              textAlign: {
                xs: 'center',
                sm: 'inherit',
              },
            }}
          >
            Nenhuma solicitação realizada!
          </Typography>
        </>
      ) : (
        <>
          {loading ? (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
              }}
            >
              <Loading />
            </Box>
          ) : (
            <Box
              sx={{
                mb: 2,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  m: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: {
                    xs: 'center',
                    sm: 'inherit',
                  },
                }}
              >
                <Typography variant='h4'>Histórico de solicitações de Pacotes</Typography>
              </Box>
              {renderPaginatedList()}

              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(responseList.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </Box>
          )}
        </>
      )}
    </>
  );
}
