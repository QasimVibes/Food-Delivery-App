declare module 'react-native-onesignal' {
    export interface Notification {
      title: string;
      body: string;
    }
  
    export interface NotificationReceivedEvent {
      getNotification(): Notification;
      complete(notification: Notification): void;
    }
    export default {
      setAppId(appId: string): void;,
      promptForPushNotificationsWithUserResponse(): Promise<boolean>;,
      setNotificationOpenedHandler(
        handler: (notification: Notification) => void
      ): void;,
      setNotificationWillShowInForegroundHandler(
        handler: (event: NotificationReceivedEvent) => void
      ): void;
    };
  }
  