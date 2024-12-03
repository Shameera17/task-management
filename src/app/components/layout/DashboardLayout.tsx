import React from "react";
import ProfileHolder from "../navigation/ProfileHolder";
import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({
  children,
  navSearch,
}: {
  children: React.ReactNode;
  navSearch?: React.ReactNode;
}) => {
  return (
    <div className="w-full">
      {/* top nav */}
      <div className="h-[72px] flex items-center justify-between px-6 border-b border-[#EFEFEF] ">
        <div>
          <SidebarTrigger />
          {navSearch && navSearch}
        </div>
        <ProfileHolder />
      </div>
      {/* dashboard content */}
      {children}
    </div>
  );
};

export default DashboardLayout;
