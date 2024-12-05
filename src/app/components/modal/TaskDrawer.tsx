"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { IconLabel } from "../form/label";
import { ArrowRight, Trash } from "iconsax-react";
import { useTaskActions } from "@/store/selectors";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { RemoveTaskDialog } from "./RemoveTaskDialog";

export function TaskDrawer({
  onOpen,
  open,
}: {
  onOpen: (flag: boolean) => void;
  open: boolean;
}) {
  const { taskDrawer, updateTaskField, removeTask, manageDrawer } =
    useTaskActions();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Sheet onOpenChange={onOpen} open={open}>
      {/* top */}
      <SheetContent className="[&>button]:hidden">
        <SheetHeader className="flex justify-between flex-row">
          <Button variant="outline">
            <IconLabel
              iconPath="/images/tick-circle-2.svg"
              text="Mark Complete"
              className="text-[#1C1C1C] "
            />
          </Button>
          <div className="flex gap-3">
            <Trash
              onClick={() => setOpenDialog(true)}
              size={"20"}
              className="text-[#727272] cursor-pointer"
            />
            <ArrowRight
              onClick={() => onOpen(false)}
              size={"20"}
              className="text-[#727272] cursor-pointer"
            />
          </div>
        </SheetHeader>
        <div className="pt-10">
          <Input
            className="font-inter !text-[25px] font-semibold leading-[30.26px] text-left"
            placeholder="shadcn"
            defaultValue={taskDrawer.record?.title}
            onChange={(e) => {
              updateTaskField(
                taskDrawer.record?.code!,
                "title",
                e.target.value
              );
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 pt-10">
          <IconLabel iconPath="/images/record.svg" text="Status" />
          <IconLabel iconPath="/images/calendar.svg" text="Due Date" />
          <IconLabel iconPath="/images/User.svg" text="Mark Complete" />
          <IconLabel iconPath="/images/flag.svg" text="Priority" />
        </div>
        <div className="pt-10 flex flex-col gap-4">
          <IconLabel iconPath="/images/document-text.svg" text="Description" />
          <Textarea
            className="font-inter !text-[16px] font-medium leading-[19.36px] text-[#474747] text-left"
            placeholder="shadcn"
            defaultValue={taskDrawer.record?.description}
            onChange={(e) => {
              updateTaskField(
                taskDrawer.record?.code!,
                "description",
                e.target.value
              );
            }}
          />
        </div>
      </SheetContent>
      {openDialog && (
        <RemoveTaskDialog
          onOpen={setOpenDialog}
          onRemoveClick={() => {
            removeTask(taskDrawer.record?.code!);
            manageDrawer(false, undefined);
          }}
          open={openDialog}
        />
      )}
    </Sheet>
  );
}
