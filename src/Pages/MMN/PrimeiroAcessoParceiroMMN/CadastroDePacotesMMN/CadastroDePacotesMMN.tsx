import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { TbTrashX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { mask } from "remask";
import {
  IReqPostPlayPctLicenciamento,
  postPlayPctLicenciamento,
} from "../../../../api/ApisPrimeiroAcessoParceiro/PctLicenciamento";
import { Cards } from "../../../../components";
import useUser from "../../../../hooks/useUser";
import { errorToast } from "../../../../utils";
import {
  currencyMask,
  currencyUnMask,
} from "../../../../utils/masks/maskCurrency";
import { StepsPrimeiroAcessoMMN } from "../StepsPrimeiroAcessoMMN";

export function CadastroDePacotesMMN() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [cardData, setcardData] = useState<IReqPostPlayPctLicenciamento[]>([
    { nome: "", chips: "", pontos: "", valor_venda: "" },
  ]);

  //breakpoints
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  ///

  const handleAddCard = () => {
    setcardData([
      ...cardData,
      { nome: "", chips: "", pontos: "", valor_venda: "" },
    ]);
  };

  const handleInputChanges = (index: any, key: any, value: any) => {
    const newCardData = [...cardData];
    //@ts-ignore
    newCardData[index][key] = value;
    setcardData(newCardData);
  };

  const handleDeleteCard = (index: number) => {
    const newCardData = [...cardData];
    newCardData.splice(index, 1);
    setcardData(newCardData);
  };

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    handleAddCard;
    try {
      const postData = cardData.map((card) => ({
        nome: card.nome,
        chips: card.chips,
        pontos: card.pontos,
        valor_venda: currencyUnMask(card.valor_venda).toString(),
      }));

      const postDataToken = {
        ...postData,
        token: user ? user.token : null,
      };
      await postPlayPctLicenciamento(postDataToken);
      toast.success("Pacotes cadastrados com sucesso");
      navigate(
        `/${user?.companyref}/primeiro-acesso-multinivel-parceiro/cadastro-de-pacotes-de-chips-mmn`
      );
    } catch (error: any) {
      errorToast(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <StepsPrimeiroAcessoMMN step={0}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={"Licenciamento"}
            subTitle={"Cadastre os dados dos seus pacotes de licenciamento"}
            size={smDown ? "80%" : "50%"}
          >
            <TextField
              variant="standard"
              label={"Nome"}
              value={card.nome}
              onChange={(e: any) =>
                handleInputChanges(index, "nome", e.target.value)
              }
              helperText={
                "Escolha um nome para o pacote, este nome será mostrado para os usuários"
              }
              sx={{ mb: 2 }}
              required
            />
            <TextField
              variant="standard"
              label={"Chips"}
              value={mask(card.chips, "999")}
              type="tel"
              onChange={(e: any) =>
                handleInputChanges(index, "chips", e.target.value)
              }
              helperText={
                "Escolha a quantidade de chips que será oferecido pra este pacote"
              }
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <TextField
              variant="standard"
              label={"Pontos"}
              value={mask(card.pontos, "9999")}
              onChange={(e: any) =>
                handleInputChanges(index, "pontos", e.target.value)
              }
              type="tel"
              helperText={
                "Defina a quantidade de pontos que cada venda deste modulo irá gerar para os usuários"
              }
              sx={{ mb: 2 }}
              required
            />
            <TextField
              type="tel"
              id="id_valor_plano"
              label="Valor de venda"
              placeholder="0,00"
              value={card.valor_venda}
              onChange={(e: any) =>
                handleInputChanges(
                  index,
                  "valor_venda",
                  currencyMask(e.target.value)
                )
              }
              variant="standard"
              fullWidth
              required
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
            {index !== 0 && (
              <IconButton color="error" onClick={() => handleDeleteCard(index)}>
                <TbTrashX />
              </IconButton>
            )}
          </Cards>
        ))}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box mt={2}>
            <Tooltip title="Adicionar pacote">
              <IconButton
                onClick={handleAddCard}
                sx={{ backgroundColor: "var(--primary_color)" }}
              >
                <HiOutlinePlusSmall />
              </IconButton>
            </Tooltip>
          </Box>
          <LoadingButton type="submit" variant="contained" loading={loading}>
            Enviar
          </LoadingButton>
        </Box>
      </Box>
    </StepsPrimeiroAcessoMMN>
  );
}
