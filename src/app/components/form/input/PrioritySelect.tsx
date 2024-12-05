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

export function PrioritySelect({
  defaultValue,
  onValueChange,
}: {
  defaultValue: string;
  onValueChange: (priority: string) => void;
}) {
  return (
    <Select
      onValueChange={(value) => onValueChange(value)}
      defaultValue={defaultValue ?? undefined}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue
          defaultValue={defaultValue ?? undefined}
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
  );
}
