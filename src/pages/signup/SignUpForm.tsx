import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Input } from "../../components/form/input";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface SignUpFormValues extends FieldValues {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

interface SignUpData {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpFormValues>;
  loading: boolean;
}

export const SignUpForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: SignUpData) => {
  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      mt={["4", "4", "0"]}
      padding="40px 25px"
      border="3px solid"
      borderColor="gray.100"
      borderRadius="8"
      bg="white"
      color="gray.900"
      w={["100%", "100%", "40%", "40%"]}
    >
      <Heading size="lg">Bem vindo de volta!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            type="email"
            placeholder="Digite seu nome"
            label="Nome"
            error={errors.name}
            icon={FaUser}
            {...register("name")}
          />
          <Input
            type="email"
            placeholder="Digite seu login"
            label="Login"
            error={errors.email}
            icon={FaEnvelope}
            {...register("email")}
          />
          {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: nome@email.com
            </Text>
          )}
        </Box>
        <Input
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          error={errors.password}
          icon={FaLock}
          {...register("password")}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          label="Confirmação de senha"
          error={errors.confirm_password}
          icon={FaLock}
          {...register("confirm_paassword")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bg="purple.800"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "purple.900" }}
          type="submit"
        >
          Entrar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta?</Text>
        <Button
          mt="8"
          isLoading={loading}
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "gray.200" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
