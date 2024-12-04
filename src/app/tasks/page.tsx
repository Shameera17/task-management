"use client";

import { Status } from "@/types";
import DashboardLayout from "../components/layout/DashboardLayout";
import Column from "../components/task/Column";

import { useEffect, useState } from "react";
export default function Tasks() {
  const [statusList, setStatusList] = useState<Status[]>([]);

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
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4 min-w-[calc(3*364px+10px)] h-full px-4 pt-8 pb-5">
        {Array.isArray(statusList) &&
          statusList.map((status) => (
            <Column status={status} key={status.id} />
          ))}
      </div>
    </DashboardLayout>
  );
}
