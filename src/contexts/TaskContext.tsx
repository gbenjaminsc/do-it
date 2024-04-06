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
  createTask: (data: Task, accessToken: string) => Promise<void>;
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

  const createTask = useCallback(async (data: Task, accessToken: string) => {
    await api
      .post("/tasks", data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response: AxiosResponse<Task>) =>
        setTask((oldTasks) => [...oldTasks, response.data])
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { useTasks, TaskProvider };
