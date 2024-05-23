import { Box, Grid } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SearchBox } from "../../components/Form/SearchBox";
import { Card } from "../../components/Card";
import { useTasks } from "../../contexts/TaskContext";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user, accessToken } = useAuth();
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks(user.id, accessToken).then((res) => setLoading(false));
  }, []);

  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {tasks.map((task) => (
          <Card task={task} />
        ))}
      </Grid>
    </Box>
  );
};
