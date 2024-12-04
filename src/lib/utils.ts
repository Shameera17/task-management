import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTaskCode(latestCode: string | null = null): string {
  if (!latestCode) {
    // Start with the first code if no latest code exists
    return "TASK-001";
  }

  // Extract the numeric part of the latest code
  const latestNumber = parseInt(latestCode.split("-")[1], 10);

  // Increment the numeric part and format it with leading zeros
  const nextNumber = latestNumber + 1;
  const formattedNumber = nextNumber.toString().padStart(3, "0");

  // Combine prefix and formatted number
  return `TASK-${formattedNumber}`;
}
