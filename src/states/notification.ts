import { atom } from "recoil";
import { RecoilKey } from "@/states/RecoilKey";

export interface NotificationState {
  content: string;
  severity: "success" | "info" | "warning" | "error";
}

export const notificationState = atom<NotificationState>({
  key: RecoilKey.NotificationState,
  default: { content: "", severity: "success" },
});
