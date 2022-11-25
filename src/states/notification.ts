import { atom } from "recoil";
import { RecoilKey } from "@/states/RecoilKey";

export const notificationState = atom({
  key: RecoilKey.NotificationState,
  default: { content: "", severity: "success" },
});
