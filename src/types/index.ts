export enum StatusCode {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface Status {
  name: "Todo" | "In Progress" | "Completed";
  id: number;
  code: StatusCode;
}

export interface User {
  name: string;
  avatarUrl: string;
  email: string;
}

export interface Task {
  index: number;
  code: string;
  statusCode: StatusCode;
  title: string;
  description: string;
  date: string;
  assignee: User | undefined;
  priority: "Low" | "Medium" | "High";
}

export interface TaskCollection {
  status: Status;
  list: Task[] | null;
}
