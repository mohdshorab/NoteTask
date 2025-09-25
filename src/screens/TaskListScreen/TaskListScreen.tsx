import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './TaskListScreenStyles';
import Header from '../../components/Header/Header';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TaskCard from '../../components/TaskCard/TaskCard';
import Screens from '../../navigation/ScreenNameList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/slice/taskSlice';

const TaskListScreen: React.FC = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState('');
  const { tasks, loading } = useSelector((state: any) => state.tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks || []);

  const dispatch = useDispatch();

  const onPressAdd = () => {
    navigation.navigate(Screens.ADD_EDIT_TASK);
  };

  const onPressCard = (item: any) => {
    navigation.navigate(Screens.ADD_EDIT_TASK, { task: item });
  };

  useEffect(() => {
    dispatch(fetchTasks() as any);
  }, [dispatch]);

  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task: any) =>
        task.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredTasks(filtered);
    }
  }, [searchText, tasks]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task List" />
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {filteredTasks.length ? (
        <FlatList
          keyExtractor={i => i.id}
          data={filteredTasks}
          renderItem={({ item }) => (
            <TaskCard onPress={() => onPressCard(item)} item={item} />
          )}
        />
      ) : (
        <Text style={styles.noTaskFoundText}>No Tasks Found</Text>
      )}

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => onPressAdd()}
      >
        <Text style={styles.btnText}>➕</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskListScreen;
