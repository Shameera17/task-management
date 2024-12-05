"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  defaultValue,
  onValueChange,
  onSelectRemove,
}: {
  defaultValue: string;
  onValueChange: (priority: string) => void;
  onSelectRemove: () => void;
}) {
  const [date, setDate] = React.useState<Date>();
  React.useEffect(() => {
    if (defaultValue) {
      setDate(new Date(defaultValue));
    } else setDate(undefined);
  }, [defaultValue]);

  return (
    <div className="flex gap-3 items-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            {!date && <CalendarIcon />}
            {date ? format(date, "PP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              console.log(date);
              if (date) {
                // Extract the year, month, and day in the local timezone
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
                const day = String(date.getDate()).padStart(2, "0");

                const formattedDate = `${year}-${month}-${day}`;
                onValueChange(formattedDate);
              }
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {defaultValue && (
        <span className="w-5 h-5">
          <X className="h-full cursor-pointer" onClick={onSelectRemove} />
        </span>
      )}
    </div>
  );
}
