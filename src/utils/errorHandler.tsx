import { Alert } from 'react-native';

export function handleError(error: any, userMessage: string = 'Something went wrong') {
  console.error(error);
  Alert.alert('Error', userMessage);
}
