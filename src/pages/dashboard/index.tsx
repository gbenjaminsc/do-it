import { Box, Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "../../components/Header";

export const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <Box>
      <Header />
    </Box>
  );
};
