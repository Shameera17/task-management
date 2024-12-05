import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/types";
import { getFirstLetters } from "@/lib/utils";
import { X } from "lucide-react";

export function UserSelect({
  defaultValue,
  onValueChange,
  onSelectRemove,
}: {
  defaultValue: string;
  onValueChange: (user: User) => void;
  onSelectRemove: () => void;
}) {
  const [usersList, setUsersList] = React.useState<User[]>([]);

  React.useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await fetch("/data/users.json");
        if (!response.ok) {
          throw new Error("Failed to fetch statusList.");
        }
        const data = await response.json();
        setUsersList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsersList();
  }, []);

  return (
    <div className="flex gap-2 items-center w-[190px]">
      <Select
        value={defaultValue ?? ""}
        onValueChange={(value) => {
          const user = usersList.filter((user) => user.email === value)[0];
          onValueChange(user);
        }}
        defaultValue={defaultValue ?? undefined}
      >
        <SelectTrigger className="w-[170px]">
          <SelectValue
            defaultValue={defaultValue ?? undefined}
            placeholder="Select a user"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>User</SelectLabel>
            {Array.isArray(usersList) &&
              usersList.map((user) => (
                <SelectItem key={user.email} value={user.email}>
                  <span className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user?.avatarUrl} alt="@shadcn" />
                      <AvatarFallback>
                        {user.name && getFirstLetters(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    {user.name}
                  </span>
                </SelectItem>
              ))}
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
