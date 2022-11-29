import { atom } from "recoil";
import { RecoilKey } from "@/states/RecoilKey";
import { NotificationModel } from "@/types";

export const notificationState = atom<NotificationModel>({
  key: RecoilKey.NotificationState,
  default: { content: "", severity: "success" },
});
