import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SignUpInfo } from "./SignUpInfo";
import { SignUpForm } from "./SignUpForm";
import { GoBackButton } from "./GoBackButton";
import { api } from "../../services/api";
import { ModalSuccess } from "../../components/Modal/ModalSucess";
import { ModalError } from "../../components/Modal/ModalError";
import { useHistory } from "react-router-dom";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório ").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

export const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();
  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((response) => {
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((err) => {
        setLoading(false);
        onModalErrorOpen();
      });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const history = useHistory();

  return (
    <>
      <ModalSuccess
        buttonMessage="Ir para o login agora"
        message="Seu cadastro deu super certo, <b>vamos lá</b>"
        onClick={() => history.push("/")}
        secondaryText="Você já pode começar criando <b>suas listas</b> de tarefas agora mesmo..."
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError
        error="Seu email já está em uso"
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
        secondaryText="Você  já pode tentar novamente, <b>clicando</b> no botão acima ou aguarde alguns minutos..."
      />
      <Flex
        padding={["0px", "0px", "10px 15px", "10px 15px"]}
        alignItems="center"
        justifyContent="center"
        height={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35% )",
          "linear(to-b, purple.800 65%, white 35% )",
          "linear(to-l, purple.800 65%, white 35% )",
          "linear(to-l, purple.800 65%, white 35% )",
        ]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          {isWideVersion ? (
            <>
              <GoBackButton top="45" left="24" />
              <SignUpForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                register={register}
                loading={loading}
              />
              <SignUpInfo />
            </>
          ) : (
            <>
              <GoBackButton top="10" left="75vw" />
              <SignUpInfo />
              <SignUpForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                register={register}
                loading={loading}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
