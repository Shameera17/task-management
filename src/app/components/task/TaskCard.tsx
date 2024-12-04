import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCompletionText } from "@/lib/dateUtils";
import { Task } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

const TaskCard = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.code,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <Card ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent>*/}
      <CardFooter>
        <p>{getCompletionText(task.date)}</p>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
