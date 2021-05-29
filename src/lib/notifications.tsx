import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function schedulePushNotification({
  title,
  body,
  data = {}
}: {
  title: string,
  body: string,
  data?: any,
}, time: number) {
  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      data,
    },
    trigger: { seconds: time }
  });

  return notificationId;
}

export async function sendCountdownEndedNotification(notificationTime: number) {
  const notifications = [
    { title: 'Seu ciclo terminou!', body: 'Pode relaxar que agora é hora do cafézinho ☕️' },
    { title: 'Seu ciclo terminou!', body: 'Não se esqueça de se exercitar durante as pausas 🤸‍♂️' },
    { title: 'Seu ciclo terminou!', body: 'Já pode relaxar e ficar zen 🧘' },
  ];

  const content = notifications[Math.floor(Math.random() * notifications.length)];
  await schedulePushNotification(content, notificationTime);
}

export async function cancelPendindNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
