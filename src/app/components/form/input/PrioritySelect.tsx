import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export function PrioritySelect({
  defaultValue,
  onValueChange,
  onSelectRemove,
}: {
  defaultValue: string;
  onValueChange: (priority: string) => void;
  onSelectRemove: () => void;
}) {
  return (
    <div className="flex gap-3 items-center">
      <Select
        value={defaultValue ?? ""}
        onValueChange={(value) => onValueChange(value)}
        defaultValue={defaultValue ?? ""}
      >
        <SelectTrigger className="flex w-[180px]">
          <SelectValue
            defaultValue={defaultValue ?? ""}
            placeholder="Set priority"
            className="text-gray-400"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Priority</SelectLabel>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {defaultValue && (
        <span className="w-5 h-5">
          <X className="h-full cursor-pointer" onClick={onSelectRemove} />
        </span>
      )}
    </div>
  );
}
