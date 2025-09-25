import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

const requestPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      console.log('Android notification permission:', granted);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  } catch (error) {
    console.error('Permission request error:', error);
    return false;
  }
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error getting FCM token:', error);
    return null;
  }
};

const setupMessageHandlers = () => {
  messaging().onMessage(async remoteMessage => {
    console.log('Foreground notification:', remoteMessage);
    Alert.alert(
      remoteMessage.notification?.title || 'Notification',
      remoteMessage.notification?.body || 'You have a new message',
    );
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('App opened from background notification:', remoteMessage);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('App launched from notification:', remoteMessage);
      }
    });
};

const initialize = async () => {
  await requestPermission();
  await getToken();
  setupMessageHandlers();
};

const sendLocalNotification = (title, body) => {
  Alert.alert(title, body);
};

export {
  initialize,
  requestPermission,
  getToken,
  setupMessageHandlers,
  sendLocalNotification,
};
