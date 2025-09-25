import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from './ScreenNameList';
import TaskListScreen from '../screens/TaskListScreen/TaskListScreen';
import AddEditTaskScreen from '../screens/AddEditTaskScreen/AddEditTaskScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.TASK_LIST}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Screens.TASK_LIST} component={TaskListScreen} />
        <Stack.Screen
          name={Screens.ADD_EDIT_TASK}
          component={AddEditTaskScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
