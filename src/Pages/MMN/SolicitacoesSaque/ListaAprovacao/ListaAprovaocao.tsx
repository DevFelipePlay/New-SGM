import {
  Box,
  Button,
  Grid,
  IconButton,
  ListItemText,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { toUpper } from "lodash";
import { CSSProperties, useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { mask } from "remask";
import {
  IReqPostPlayListaDeSolicitacoes,
  IResPostPlayListaDeSolicitacoes,
  postPlayListaDeSolicitacoes,
} from "../../../../api";
import {
  IReqPostPlayConfirmacaoSolicitacaoSaque,
  postPlayConfirmacaoSolicitacaoSaque,
} from "../../../../api/ApisSaqueMMN/ConfirmacaoSolicitacaoSaque";
import { Cards, Loading } from "../../../../components";
import { useForm } from "../../../../hooks";
import useUser from "../../../../hooks/useUser";
import {
  currencyFormatter,
  dateFormatter,
  errorToast,
} from "../../../../utils";

export function ListaAprovaocao() {
  const [loadingView, setLoadingView] = useState(false);
  const [responseView, setResponseView] = useState<
    IResPostPlayListaDeSolicitacoes[]
  >([]);
  const { user } = useUser();
  const { formData, changeForm } = useForm({
    mensagem: "",
  });

  // Modal de negação

  const style: CSSProperties = {
    display: "flex",
    alignItems: "cennter",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    borderRadius: "10px",
    boxShadow: "24",
    backgroundColor: "white",
    color: "var(--text_color)",
    padding: "4rem",
    textAlign: "center",
    border: "none",
  };
  const [open, setOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  const handleOpen = (index: number) => {
    setOpen(true);
    setSelectedCardIndex(index);
  };
  const handleClose = () => setOpen(false);
  // Modal de aceitação

  const styleConfirm: CSSProperties = {
    display: "flex",
    alignItems: "cennter",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    borderRadius: "10px",
    boxShadow: "24",
    backgroundColor: "white",
    color: "var(--text_color)",
    padding: "4rem",
    textAlign: "center",
    border: "none",
  };
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedCardIndexConfirm, setSelectedCardIndexConfirm] = useState<
    number | null
  >(null);
  const handleOpenConfirm = (index: number) => {
    setOpenConfirm(true);
    setSelectedCardIndexConfirm(index);
  };
  const handleCloseCofirm = () => setOpenConfirm(false);
  //

  async function handleViewListaDeSolicitacoes() {
    setLoadingView(true);

    try {
      const payload: IReqPostPlayListaDeSolicitacoes = {
        token: user?.token || "",
      };

      const data = await postPlayListaDeSolicitacoes(payload);
      setResponseView(data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoadingView(false);
    }
  }
  async function handleConfirmacaoSolicitacaoSaqueTrue(index: number) {
    setLoadingView(true);

    try {
      const payload: IReqPostPlayConfirmacaoSolicitacaoSaque = {
        id: responseView[index].ID_Solicitacao,
        status_pagamento: 1,
        token: user?.token || "",
        mensagem: "",
      };

      await postPlayConfirmacaoSolicitacaoSaque(payload);
      toast.success("Solicitação Respondida com sucesso");
      handleViewListaDeSolicitacoes();
    } catch (error: any) {
      errorToast(error);
    } finally {
      setLoadingView(false);
    }
  }
  async function handleConfirmacaoSolicitacaoSaqueFalse(
    e: React.FormEvent<HTMLFormElement>,
    index: number
  ) {
    e.preventDefault();
    setLoadingView(true);

    try {
      const payload: IReqPostPlayConfirmacaoSolicitacaoSaque = {
        id: responseView[index].ID_Solicitacao,
        status_pagamento: 0,
        token: user?.token || "",
        mensagem: formData.mensagem,
      };

      await postPlayConfirmacaoSolicitacaoSaque(payload);
      toast.success("Solicitação Respondida com sucesso");
      window.location.reload();
    } catch (error: any) {
      errorToast(error);
      window.location.reload();
    } finally {
      setLoadingView(false);
    }
  }

  useEffect(() => {
    handleViewListaDeSolicitacoes();
  }, []);

  return (
    <>
      {responseView.length === 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          <Typography>Não há solicitações pendentes</Typography>
        </Box>
      ) : (
        <>
          {loadingView ? (
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
            <>
              {responseView.map((item, index) => (
                <Box sx={{ flexGrow: 1, width: "100%" }} key={index}>
                  <Grid item xs={12} md={6}>
                    <Cards
                      title={"Solicitação de Saque"}
                      subTitle={""}
                      size={"100%"}
                    >
                      <ListItemText sx={{ userSelect: "none" }}>
                        Solicitante: {item.Nome}
                      </ListItemText>
                      <ListItemText sx={{ userSelect: "none" }}>
                        Chave Pix: {item.chave_pix}
                      </ListItemText>
                      <ListItemText sx={{ userSelect: "none" }}>
                        Titular Pix: {item.nome_titular_pix}
                      </ListItemText>
                      <ListItemText sx={{ userSelect: "none" }}>
                        Tipo Pix: {toUpper(item.tipo_pix)}
                      </ListItemText>
                      <ListItemText sx={{ userSelect: "none" }}>
                        CPF do Titular:{" "}
                        {item.cpf_titular_pix
                          ? mask(item.cpf_titular_pix, ["999.999.999-99"])
                          : ""}
                      </ListItemText>
                      <ListItemText sx={{ userSelect: "none" }}>
                        Data da Solicitação:{" "}
                        {dateFormatter(item.Data_Solicitacao)}
                      </ListItemText>
                      <ListItemText sx={{ userSelect: "none" }}>
                        Saldo Disponivel:{" "}
                        {currencyFormatter(item.Saldo_Disponivel)}
                      </ListItemText>
                      <ListItemText sx={{ userSelect: "none" }}>
                        <Typography variant="h5" color={"var(--primary_color)"}>
                          Valor Solicitado:{" "}
                          {currencyFormatter(item.Valor_Solicitado)}
                        </Typography>
                      </ListItemText>
                      <Typography sx={{ mt: 2 }}>
                        Responda a solicitação:
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Tooltip title="Confirmar Pagamento">
                          <IconButton
                            color="success"
                            onClick={() => {
                              handleOpenConfirm(index);
                            }}
                          >
                            <IoMdCheckmark />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Negar Solicitação">
                          <IconButton
                            color="error"
                            onClick={() => {
                              handleOpen(index);
                            }}
                          >
                            <IoCloseSharp />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Cards>
                  </Grid>
                  <Modal
                    open={open && selectedCardIndex === index}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        color={"error"}
                        sx={{ mb: 2 }}
                      >
                        Negar Solicitação de saque
                      </Typography>
                      <TextField
                        sx={{ mb: 2 }}
                        variant="filled"
                        multiline
                        rows={10}
                        value={formData.mensagem}
                        onChange={(e) => changeForm("mensagem", e.target.value)}
                        label="Mensagem para o usuário"
                        helperText="Envie uma mensagem explicando o motivo da negação desta solicitação para o usuário"
                      />
                      <Button
                        onClick={(e: any) => {
                          handleConfirmacaoSolicitacaoSaqueFalse(e, index);
                        }}
                        variant="contained"
                      >
                        enviar
                      </Button>
                    </Box>
                  </Modal>
                  <Modal
                    open={openConfirm && selectedCardIndexConfirm === index}
                    onClose={handleCloseCofirm}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styleConfirm}>
                      <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        color={"var(--primary_color)"}
                        sx={{ mb: 2 }}
                      >
                        {` Deseja confirmar o pagamento da solicitação de saque feita por: ${item.Nome}?`}
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        color={"black"}
                        sx={{ mb: 2 }}
                      >
                        {` No valor de R$ ${item.Valor_Solicitado}`}
                      </Typography>

                      <Button
                        onClick={() => {
                          handleConfirmacaoSolicitacaoSaqueTrue(index);
                          handleCloseCofirm();
                        }}
                        variant="contained"
                      >
                        confirmar
                      </Button>
                    </Box>
                  </Modal>
                </Box>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}
