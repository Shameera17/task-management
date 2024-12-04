import { StatusColumn } from "@/types";
import React, { useMemo, useState } from "react";
import TitleCard from "./TitleCard";
import { Button } from "@/components/ui/button";
import { Label4 } from "../form/label";
import { Add } from "iconsax-react";
import { useTaskStore } from "@/store/taskStore";

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
      />
      {/* task cards */}
      {/* add task button */}
      <Button
        onClick={() => setMode("type_card")}
        variant="ghost"
        style={{
          display: mode === "type_card" ? "none" : "flex",
        }}
        className="h-12 mt-3 w-full flex justify-center text-[#727272] hover:text-[#727272]"
      >
        <Add style={{ width: "24px", height: "24px" }} />
        <Label4 text="Add task" />
      </Button>
      {/* temporary task card */}
    </div>
  );
};

export default Column;
