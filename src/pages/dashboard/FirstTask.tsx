import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { ModalCreateTask } from "../../components/Modal/ModalCreateTask";
import { FaClipboard } from "react-icons/fa";

export const FirstTask = () => {
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose,
  } = useDisclosure();
  return (
    <>
      <ModalCreateTask isOpen={isCreateTaskOpen} onClose={onCreateTaskClose} />
      <Header />
      <Box
        mt="4"
        w="90vw"
        paddingY="16"
        paddingX={["6", "0"]}
        ml="5vw"
        justifyContent="center"
        textAlign="center"
        borderWidth="2px"
        borderColor="gray.200"
        borderStyle="dashed"
      >
        <Center fontSize="5xl">
          <FaClipboard color="#bdbdbd" />
        </Center>
        <Heading fontSize="4xl" as="h1" mt="4">
          Vamos criar sua primeira tarefa
        </Heading>
        <Text mt="6" color="gray.400">
          {" "}
          Insira sua meta e mostra a você mesmo <br /> capacidade em cumprir{" "}
          <Text fontWeight="bold" display="inline-block" color="gray.900">
            suas atividades
          </Text>
        </Text>
        <Button
          mt="6"
          padding="6"
          bgColor="purple.800"
          color="white"
          _hover={{ bg: "purple.900" }}
          onClick={onCreateTaskOpen}
        >
          Criar sua primeira tarefa
        </Button>
      </Box>
    </>
  );
};
