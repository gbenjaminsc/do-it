import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoSecondary from "../../assets/main-logo.svg";


export const LoginInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
      <Image
        src={LogoSecondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading mt="4" as="h1">
        O jeito fácil, grátis
      </Heading>
      <Text maxW="350px">
        Flexivel e atrativo de gerenciar
        <b> seus projetos em uma unica plataforma</b>
      </Text>
    </Grid>
  );
};
