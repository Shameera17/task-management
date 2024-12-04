import { StatusColumn } from "@/types";
import React, { useMemo, useState } from "react";
import TitleCard from "./TitleCard";
import { useTaskStore } from "@/store/taskStore";
import { AddTaskButton } from "../form/input/Buttons";
import TaskCard from "./TaskCard";

const Column: React.FC<StatusColumn> = ({ status, refreshTrigger }) => {
  const [mode, setMode] = useState<"button" | "type_card">("button");
  const filterTasks = useTaskStore((state) => state.filterTasks);

  const filteredList = useMemo(() => {
    return filterTasks(status.code);
  }, [refreshTrigger, status.code]);

  return (
    <div className="border-dashed border-2 rounded-xl  border-[#C8C8C8] p-4  h-full">
      {/* title card */}
      <TitleCard
        title={status.name}
        statusCode={status.code}
        count={filteredList.length}
        addTask={() => {}}
        className="mb-6"
      />
      {/* task cards */}
      <div className="flex flex-col gap-3">
        {filteredList.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
      {/* add task button */}
      <AddTaskButton
        onClick={() => setMode("type_card")}
        displayMode={mode === "type_card"}
      />
      {/* temporary task card */}
    </div>
  );
};

export default Column;
