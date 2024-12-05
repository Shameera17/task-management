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

export function UserSelect({
  defaultValue,
  onValueChange,
}: {
  defaultValue: string;
  onValueChange: (user: User) => void;
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
    <Select
      onValueChange={(value) => {
        const user = usersList.filter((user) => user.email === value)[0];
        onValueChange(user);
      }}
      defaultValue={defaultValue ?? undefined}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue
          defaultValue={defaultValue ?? undefined}
          placeholder="Select a user"
          className="text-gray-400"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>User</SelectLabel>
          {Array.isArray(usersList) &&
            usersList.map((user) => (
              <SelectItem value={user.email}>
                <span className="flex items-center gap-2">
                  <Avatar className="h-7 w-7">
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
  );
}
