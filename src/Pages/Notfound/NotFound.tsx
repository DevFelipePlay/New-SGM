import { Box, Button, Stack, Typography } from "@mui/material";
import { Error401Image } from "../../assets/svg/Error401Image";
import useWindowSize from "../../hooks/useWindowSize";

export default function NotFound() {
  const { isMobile } = useWindowSize();
  return (
    <Box
      height={isMobile ? "100vh" : "100vh"}
      display="flex"
      justifyContent="center"
      flexDirection={isMobile ? "column" : "row"}
      sx={{
        background: `${isMobile ? "var(--backGround_default)" : "#fff"}`,
      }}
      gap={isMobile ? 4 : 0}
    >
      <Box
        flex={1}
        width="225px"
        display="flex"
        alignSelf="center"
        justifyContent="center"
        order={isMobile ? "2" : "1"}
        sx={{
          background: `${isMobile ? "var(--backGround_default)" : "#fff"}`,
        }}
      >
        <Error401Image />
      </Box>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="#fff"
        sx={{ background: "var(--backGround_default)" }}
        gap={1}
        order={isMobile ? "1" : "2"}
        textAlign="center"
        px={2}
      >
        <Typography
          variant="h3"
          color="var(--primary_color)"
          fontWeight="900"
          letterSpacing={isMobile ? 3 : 8}
          sx={{
            fontSize: `${isMobile ? "5rem" : "8.75rem"}`,
          }}
        >
          404
        </Typography>
        <Typography variant="h6" fontWeight="700">
          Página não encontrada!
        </Typography>
        <Stack>
          <Typography variant="subtitle1">
            Desculpe, a página que você está procurando não existe.{" "}
          </Typography>
          <Typography variant="subtitle1">
            Entre em contato com o administrador.
          </Typography>
        </Stack>
        <Button
          sx={{ color: "var(--white)", fontWeight: "700", p: 1.25 }}
          variant="contained"
        >
          Entrar em contato
        </Button>
      </Box>
    </Box>
  );
}
