import { StatusCode, Task } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (code: string) => void;
  updateTask: (updatedTask: Task) => void;
  filterTasks: (statusCode: StatusCode) => Task[];
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [
        {
          index: 1,
          code: "TASK-001",
          statusCode: "TODO" as StatusCode,
          title: "Create project structure",
          description:
            "Setup the initial structure for the project repository.",
          date: "2024-12-01",
          assignee: null,
          priority: "High",
        },
        {
          index: 2,
          code: "TASK-002",
          statusCode: "IN_PROGRESS" as StatusCode,
          title: "Develop user login API",
          description: "Build the API for user login and authentication.",
          date: "2024-12-02",
          assignee: {
            name: "Jane Smith",
            avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
            email: "janesmith@example.com",
          },
          priority: "Medium",
        },
        {
          index: 3,
          code: "TASK-003",
          statusCode: "COMPLETED" as StatusCode,
          title: "Design application logo",
          description: "Create the logo for branding.",
          date: "2024-11-30",
          assignee: {
            name: "John Doe",
            avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
            email: "johndoe@example.com",
          },
          priority: "Low",
        },
      ],
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (code) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.code !== code),
        })),
      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.code === updatedTask.code ? { ...task, ...updatedTask } : task
          ),
        })),
      filterTasks: (statusCode) => {
        const tasks = get().tasks;
        const filtered = tasks.filter((task) => task.statusCode === statusCode);
        return filtered;
      },
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
