import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";
import type { DueDigest, NotificationService } from "../domain/ports";

export class TauriNotificationService implements NotificationService {
  async notifyDueDigest(input: DueDigest): Promise<void> {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }

    if (!permissionGranted) {
      return;
    }

    sendNotification({
      title: input.title,
      body: input.body,
    });
  }
}
