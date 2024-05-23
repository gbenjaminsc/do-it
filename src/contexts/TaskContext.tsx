import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";
import { AxiosResponse } from "axios";

interface TaskProviderProps {
  children: ReactNode;
}

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface TaskContextData {
  tasks: Task[];
  createTask: (data: Omit<Task, "id">, accessToken: string) => Promise<void>;
  loadTasks: (userId: string, accessToken: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within an TaskProvider");
  }

  return context;
};

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTask] = useState<Task[]>([]);

  const loadTasks = useCallback(async (userId: string, accessToken: string) => {
    try {
      const response = await api.get(`/tasks?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTask(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createTask = useCallback(
    async (data: Omit<Task, "id">, accessToken: string) => {
      await api
        .post("/tasks", data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response: AxiosResponse<Task>) =>
          setTask((oldTasks) => [...oldTasks, response.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <TaskContext.Provider value={{ tasks, createTask, loadTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { useTasks, TaskProvider };
