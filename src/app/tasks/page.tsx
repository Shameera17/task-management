"use client";

import { StatusCode } from "@/types";
import DashboardLayout from "../components/layout/DashboardLayout";
import Column from "../components/task/Column";

export default function Tasks() {
  // const checkForDB = () => {
  //   const db = localStorage.getItem('DB')
  //   let something = {}
  //   if(db) {
  //     something =JSON.parse(db)
  //     // save to react
  //   } else {
  //     const toSave = JSON.stringify(jsonObject)
  //     localStorage.setItem('DB', toSave)
  //     // save to react: jsonObject
  //   }
  // }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4 min-w-[calc(3*364px+10px)] h-full px-4 pt-8 pb-5">
        <Column
          status={{
            id: 1,
            name: "Todo",
            code: StatusCode.TODO,
          }}
          list={[]}
        />
        <Column
          status={{
            id: 2,
            name: "In Progress",
            code: StatusCode.IN_PROGRESS,
          }}
          list={[]}
        />
        <Column
          status={{
            id: 3,
            name: "Completed",
            code: StatusCode.COMPLETED,
          }}
          list={[]}
        />
      </div>
    </DashboardLayout>
  );
}
