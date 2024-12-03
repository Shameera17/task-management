import { Task } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (code: string) => void;
  updateTask: (updatedTask: Task) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
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
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
