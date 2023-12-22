import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import {
  IReqPostPlayListaSolicitacaoSaqueConcluido,
  postPlayListaSolicitacaoSaqueConcluido,
} from "../../../../api/ApisSaqueMMN/ListaSolicitacaoSaqueConcluido";
import { IResPostPlayListaSolicitacaoSaqueConcluido } from "../../../../api/ApisSaqueMMN/ListaSolicitacaoSaqueConcluido/IResPostPlayListaSolicitacoes";
import {
  ListHistoricoSolicitacoesSaqueParceiro,
  Loading,
} from "../../../../components";
import useUser from "../../../../hooks/useUser";
import { currencyMask, dateFormatter } from "../../../../utils";

export function Historico() {
  const [loading, setLoading] = useState(false);
  const [responseList, setResponseList] = useState<
    IResPostPlayListaSolicitacaoSaqueConcluido[]
  >([]);
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  async function handleListRedeDeUsuarioMMN() {
    setLoading(true);

    const payload: IReqPostPlayListaSolicitacaoSaqueConcluido = {
      token: user?.token || "",
    };
    try {
      const data = await postPlayListaSolicitacaoSaqueConcluido(payload);
      setResponseList(data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  //@ts-ignore
  const handlePageChange = (
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
      <Box sx={{ width: "100%" }} key={index}>
        <ListHistoricoSolicitacoesSaqueParceiro
          nome={item.Nome}
          statusPagamento={item.status_pagamento}
          id={item.ID}
          valorPago={currencyMask(item.Valor_Pago)}
          dataPagamento={dateFormatter(item.Data_Pagamento)}
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
      {responseList.length === 0 ? (
        <>
          <Box
            sx={{
              width: "100%",
              m: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: {
                xs: "center",
                sm: "inherit",
              },
            }}
          >
            <Typography variant="h4">
              Histórico de solicitações de saque
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{
              mt: 10,
              textAlign: {
                xs: "center",
                sm: "inherit",
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
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
              }}
            >
              <Loading />
            </Box>
          ) : (
            <Box
              sx={{
                mb: 2,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  m: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: {
                    xs: "center",
                    sm: "inherit",
                  },
                }}
              >
                <Typography variant="h4">
                  Histórico de solicitações de saque
                </Typography>
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
