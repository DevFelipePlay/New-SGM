import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  Grid,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import { upperCase } from "lodash";
import React, { CSSProperties, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { mask } from "remask";
import {
  IReqPostPlayCadastroDadosFinanceiros,
  IReqPostPlayLimiteDeSaque,
  IReqPostPlaySolicitacaoSaque,
  IResPostPlayLimiteDeSaque,
  postPlayCadastroDadosFinanceiros,
  postPlayLimiteDeSaque,
  postPlaySolicitacaoSaque,
} from "../../../../../api";
import {
  IReqPostPlayCalculoPorcentagemSaque,
  IResPostPlayCalculoPorcentagemSaque,
  postPlayCalculoPorcentagemSaque,
} from "../../../../../api/ApisUtils/CalculoPorcentagemSaque";
import { postPlaySaqueUsuario } from "../../../../../api/ApisUtils/SaqueUsuario";
import { IResPostPlaySaqueUsuario } from "../../../../../api/ApisUtils/SaqueUsuario/IResPostPlaySaqueUsuario";
import { Cards, CustomTextField, Loading } from "../../../../../components";
import { useForm } from "../../../../../hooks";
import useUser from "../../../../../hooks/useUser";
import useWindowSize from "../../../../../hooks/useWindowSize";
import {
  currencyFormatter,
  currencyMask,
  errorToast,
} from "../../../../../utils";

export function Saque() {
  // breakpoints
  const { isMobile } = useWindowSize();
  /////
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingViewCalculo, setLoadingViewCalculo] = useState(false);

  const [loadingSubmitSaque, setLoadingSubmitSaque] = useState(false);

  const [responseLimitesSaque, setResponseLimitesSaque] =
    useState<IResPostPlayLimiteDeSaque>();
  const [responseCalculo, setResponseCalculo] =
    useState<IResPostPlayCalculoPorcentagemSaque>();

  const [handleModalCalculo, setHandleModalCalculo] = useState(false);

  const { user } = useUser();
  const [valueSolicitacao, setValueSolicitacao] =
    useState<IReqPostPlaySolicitacaoSaque>({
      valor_solicitado: "",
      cpf: user?.cpf || "",
    });
  const [responseSaque, setResponseSaque] =
    useState<IResPostPlaySaqueUsuario>();

  // Modal dados financeiros
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    borderRadius: "10px",
    boxShadow: "24",
    backgroundColor: "white",
    padding: "4rem 2rem",

    textAlign: "center",
    border: "none",
  };
  //////
  // Modal de solicitacao de saque
  const [openSaque, setOpenSaque] = useState(false);
  const handleCloseSaque = () => setOpenSaque(false);

  const handleOpenSaque = () => {
    setOpenSaque(true);
  };
  const styleSaque: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${isMobile ? "80%" : "50%"}`,
    borderRadius: "10px",
    boxShadow: "24",
    backgroundColor: "white",
    padding: `${isMobile ? "0rem" : "4rem"}`,
    textAlign: "center",
    border: "none",
  };
  //////
  const handleEditChange = (key: any, value: any) => {
    setValueSolicitacao((prevData) => ({ ...prevData, [key]: value }));
  };

  const { formData, changeForm } =
    useForm<IReqPostPlayCadastroDadosFinanceiros>({
      chave_pix: "",
      cpf_titular_pix: "",
      titular_pix: "",
      type_pix: "",
      cpf: user?.cpf ? user?.cpf : "",
    });

  const [validations, setValidation] = useState({
    chave_pix: false,
    cpf_titular_pix: false,
    cpf: false,
  });

  async function handleDataSaque() {
    setLoading(true);
    const postDataLimiteSaque: IReqPostPlayLimiteDeSaque = {
      token: user?.token || "",
    };
    try {
      let payload = {
        cpf: user?.cpf ? user?.cpf : "",
      };
      const data = await postPlaySaqueUsuario(payload);
      const dataLimites = await postPlayLimiteDeSaque(postDataLimiteSaque);
      setResponseLimitesSaque(dataLimites);
      setResponseSaque(data);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }

  async function handleViewCalculo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingViewCalculo(true);
    try {
      const paloadDataCalculo: IReqPostPlayCalculoPorcentagemSaque = {
        cpf: user?.cpf || "",
        valor_solicitado: parseFloat(valueSolicitacao.valor_solicitado),
      };

      const data = await postPlayCalculoPorcentagemSaque(paloadDataCalculo);
      setResponseCalculo(data);
      setHandleModalCalculo(true);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoadingViewCalculo(false);
    }
  }

  async function handleSubmitSaque(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingSubmitSaque(true);

    try {
      const postData = {
        cpf: user?.cpf || "",
        valor_solicitado: responseCalculo?.valor_solicitado
          ? responseCalculo?.valor_solicitado
          : "",
      };
      await postPlaySolicitacaoSaque(postData);
      toast.success("Solicitação de saque realizada!");
      setHandleModalCalculo(false);
      handleDataSaque();
    } catch (error: any) {
      errorToast(error);
      handleDataSaque();
      setHandleModalCalculo(false);
    } finally {
      setLoadingSubmitSaque(false);
      handleCloseSaque();
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingSubmit(true);

    try {
      await postPlayCadastroDadosFinanceiros(formData);
      toast.success("Dados financeiros editados!");
      handleDataSaque();
      handleClose();
    } catch (error: any) {
      errorToast(error);
    } finally {
      setLoadingSubmit(false);
    }
  }

  useEffect(() => {
    const isEmailValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.chave_pix) ||
      formData.chave_pix === "";
    const isCpfValid =
      /^\d{11}$|^\d{14}$/.test(formData.cpf) || formData.cpf === "";
    const isCpfTitularValid =
      /^\d{11}$|^\d{14}$/.test(formData.cpf_titular_pix) ||
      formData.cpf_titular_pix === "";
    setValidation({
      cpf: isCpfValid,
      chave_pix: isEmailValid,
      cpf_titular_pix: isCpfTitularValid,
    });

    console.log(formData);
  }, [formData]);

  useEffect(() => {
    handleDataSaque();
    console.log(responseSaque);
  }, []);

  return (
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Cards
              title={"Saldo"}
              subTitle={"Total disponível para saque"}
              size={"100%"}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                {responseSaque?.saldo_disponivel
                  ? `R$ ${currencyMask(
                      responseSaque?.saldo_disponivel.toString()
                    )}`
                  : `Sem Saldo`}
              </Typography>
              <Button
                size="small"
                onClick={() => handleOpenSaque()}
                variant="contained"
              >
                Solicitar saque
              </Button>
            </Cards>
            <Cards
              title={"Valor total já sacado"}
              subTitle={"Valor total já ganho até agora"}
              size={"100%"}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                {responseSaque?.valor_total_sacado
                  ? `R$ ${currencyMask(
                      responseSaque?.valor_total_sacado.toString()
                    )}`
                  : `Sem Saldo`}
              </Typography>
            </Cards>
          </Grid>
          <Grid item xs={12} md={8}>
            {responseSaque ? (
              <Cards
                title={"Seu QR Code"}
                subTitle={
                  "Este é o pix que será usado para depositar o seu bônus"
                }
                size={"100%"}
                showIcon
              >
                <Box>
                  <Typography>
                    Chave PIX:{" "}
                    {responseSaque?.chave_pix !== "cpf" ? (
                      responseSaque?.chave_pix
                    ) : (
                      <>
                        {mask(
                          responseSaque?.tipo_pix === "cpf" &&
                            responseSaque?.chave_pix
                            ? responseSaque?.chave_pix
                            : "",
                          ["999.999.999-99"]
                        )}
                      </>
                    )}
                  </Typography>
                  <Typography>
                    Tipo: {upperCase(responseSaque?.tipo_pix)}
                  </Typography>
                  <Typography>
                    Titular: {responseSaque?.nome_titular_pix}
                  </Typography>
                </Box>
                <Button
                  size="small"
                  onClick={() => handleOpen()}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Editar dados
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} component={"form"} onSubmit={handleSubmit}>
                    <Typography variant="h6">
                      Edite Seus Dados Financeiros
                    </Typography>
                    <Typography variant="h6">
                      Selecione o tipo de pix
                    </Typography>
                    <RadioGroup
                      aria-label="options"
                      name="options"
                      value={formData.type_pix}
                      onChange={(e) => changeForm("type_pix", e.target.value)}
                      sx={{ flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="telefone"
                        control={<Radio />}
                        label="Telefone"
                      />
                      <FormControlLabel
                        value="email"
                        control={<Radio />}
                        label="E-mail"
                      />
                      <FormControlLabel
                        value="cpf"
                        control={<Radio />}
                        label="CPF"
                      />
                      <FormControlLabel
                        value="chaveAleatoria"
                        control={<Radio />}
                        label="Chave Aleatória"
                      />
                    </RadioGroup>

                    {formData.type_pix === "telefone" && (
                      <CustomTextField
                        value={mask(formData.chave_pix, ["(99) 9 9999-9999"])}
                        onChange={(e) =>
                          changeForm("chave_pix", e.target.value)
                        }
                        label="Telefone"
                        required
                      />
                    )}

                    {formData.type_pix === "email" && (
                      <CustomTextField
                        value={formData.chave_pix}
                        label="E-mail"
                        onChange={(e) =>
                          changeForm("chave_pix", e.target.value)
                        }
                        helperText={
                          !validations.chave_pix
                            ? "O email deve ser valido"
                            : ""
                        }
                        error={!validations.chave_pix}
                        required
                      />
                    )}

                    {formData.type_pix === "cpf" && (
                      <CustomTextField
                        label="Chave: CPF/CNPJ"
                        value={mask(formData.chave_pix || "", [
                          "999.999.999-99",
                        ])}
                        onChange={(e) =>
                          changeForm(
                            "chave_pix",
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                        required
                      />
                    )}

                    {formData.type_pix === "chaveAleatoria" && (
                      <CustomTextField
                        value={formData.chave_pix}
                        onChange={(e) =>
                          changeForm("chave_pix", e.target.value)
                        }
                        label="Chave Aleatória"
                        required
                      />
                    )}

                    <CustomTextField
                      label="Nome do titular da conta"
                      value={formData.titular_pix}
                      onChange={(e) =>
                        changeForm("titular_pix", e.target.value)
                      }
                    />
                    <CustomTextField
                      label="CPF/CNPJ do Titular"
                      value={mask(formData.cpf_titular_pix || "", [
                        "999.999.999-99",
                        "99.999.999/9999-99",
                      ])}
                      onChange={(e) =>
                        changeForm(
                          "cpf_titular_pix",
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                      required
                      helperText={
                        !validations.cpf_titular_pix ? "CPF INVALIDO" : ""
                      }
                      error={!validations.cpf_titular_pix}
                    />
                    <Box mt={2}>
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={loadingSubmit}
                      >
                        Editar
                      </LoadingButton>
                    </Box>
                  </Box>
                </Modal>
                <Modal
                  open={openSaque}
                  onClose={handleCloseSaque}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styleSaque} component={"form"}>
                    {handleModalCalculo ? (
                      <Cards
                        title={"Solicitação de Saque"}
                        subTitle={"Faça a solicitação do valor desejado"}
                        size={"100%"}
                      >
                        <Alert severity="warning" sx={{ mb: 2, width: "100%" }}>
                          {`A taxa de solicitação de saque é de: ${responseLimitesSaque?.taxa_saque}%, o calculo será feito e o valor da taxa será descontado no momento do deposito!`}
                        </Alert>
                        <Typography variant="subtitle1">
                          {`O valor Solicitado é de ${currencyFormatter(
                            valueSolicitacao.valor_solicitado
                          )} `}
                        </Typography>
                        <Typography
                          variant="h5"
                          color={"var(--primary_color)"}
                          sx={{ mb: 2 }}
                        >
                          {`O valor a ser recebido é de ${currencyFormatter(
                            responseCalculo?.valor_solicitado
                          )} `}
                        </Typography>
                        <Box sx={{ gap: "2rem", display: "flex" }}>
                          <LoadingButton
                            variant="contained"
                            loading={loadingSubmitSaque}
                            onClick={(e: any) => {
                              handleSubmitSaque(e);
                            }}
                            disabled={valueSolicitacao.valor_solicitado === ""}
                          >
                            Confirmar
                          </LoadingButton>
                          <Button
                            color="error"
                            variant="contained"
                            onClick={() => {
                              {
                                handleCloseSaque();
                                setHandleModalCalculo(false);
                              }
                            }}
                          >
                            Cancelar
                          </Button>
                        </Box>
                      </Cards>
                    ) : (
                      <Cards
                        title={"Solicitação de Saque"}
                        subTitle={"Faça a solicitação do valor desejado"}
                        size={"100%"}
                      >
                        <Alert severity="info" sx={{ mb: 2, width: "100%" }}>
                          O valor mínimo pra saque é de: R$
                          {responseLimitesSaque?.limite_minimo_saque}
                        </Alert>
                        <TextField
                          type="tel"
                          label="Valor a ser sacado"
                          placeholder="0,00"
                          value={valueSolicitacao.valor_solicitado}
                          onChange={(e) =>
                            handleEditChange(
                              "valor_solicitado",
                              currencyMask(e.target.value)
                            )
                          }
                          variant="standard"
                          fullWidth
                          required
                          sx={{ mb: 2 }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                R$
                              </InputAdornment>
                            ),
                          }}
                        />
                        <LoadingButton
                          variant="contained"
                          loading={loadingViewCalculo}
                          onClick={(e: any) => {
                            handleViewCalculo(e);
                          }}
                          disabled={valueSolicitacao.valor_solicitado === ""}
                        >
                          Solicitar
                        </LoadingButton>
                      </Cards>
                    )}
                  </Box>
                </Modal>
              </Cards>
            ) : (
              <Cards
                title={"Seu QR Code"}
                subTitle={"Este é o pix que voce usa para receber o seu bonus"}
                size={"100%"}
                showIcon
              >
                Sem dados Financeiros
              </Cards>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
