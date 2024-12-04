"use client";

import { Status, StatusCode } from "@/types";
import DashboardLayout from "../components/layout/DashboardLayout";
import Column from "../components/task/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { useTaskStore } from "@/store/taskStore";
export default function Tasks() {
  const [statusList, setStatusList] = useState<Status[]>([]);
  const updateStatus = useTaskStore((state) => state.updateStatus);
  const tasks = useTaskStore((state) => state.tasks);
  console.log("test", tasks);
  useEffect(() => {
    const fetchStatusList = async () => {
      try {
        const response = await fetch("/data/status.json");
        if (!response.ok) {
          throw new Error("Failed to fetch statusList.");
        }
        const data = await response.json();
        setStatusList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatusList();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskCode = active.id as string;
    const newStatus = over.id as StatusCode;
    console.log(taskCode);
    console.log(newStatus);
    updateStatus(newStatus, taskCode);
  };
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4 min-w-[calc(3*200px+10px)] h-full px-4 pt-8 pb-5">
        <DndContext onDragEnd={handleDragEnd}>
          {Array.isArray(statusList) &&
            statusList.map((status) => (
              <Column status={status} key={status.id} />
            ))}
        </DndContext>
      </div>
    </DashboardLayout>
  );
}
