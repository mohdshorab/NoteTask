import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './TaskListScreenStyles';
import Header from '../../components/Header/Header';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import TaskCard from '../../components/TaskCard/TaskCard';
import LoadingSkeleton from '../../components/LoadingSkeleton/LoadingSkeleton';
import Screens from '../../navigation/ScreenNameList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/slice/taskSlice';

const TaskListScreen: React.FC = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState('');
  const { tasks, loading } = useSelector((state: any) => state.tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks || []);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  const onPressAdd = () => {
    navigation.navigate(Screens.ADD_EDIT_TASK);
  };

  const onPressCard = (item: any) => {
    navigation.navigate(Screens.ADD_EDIT_TASK, { task: item });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await dispatch(fetchTasks() as any);
    } catch (error) {
      console.error('Error refreshing tasks:', error);
    } finally {
      setRefreshing(false);
    }
  }, [dispatch]);

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

  const renderSkeletonList = () => (
    <View>
      {[...Array(5)].map((_, index) => (
        <LoadingSkeleton key={index} />
      ))}
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No tasks found</Text>
      <Text style={styles.emptySubtitle}>
        {searchText ? 'Try adjusting your search' : 'Create your first task to get started'}
      </Text>
    </View>
  );

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Task List" />
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search tasks..."
            value={searchText}
            onChangeText={setSearchText}
            editable={false}
          />
        </View>
        {renderSkeletonList()}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task List" />
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search tasks..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard onPress={() => onPressCard(item)} item={item} />
        )}
        ListEmptyComponent={renderEmptyState}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={onPressAdd}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskListScreen;
