import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import TaskCard from '../../components/TaskCard/TaskCard';
import LoadingSkeleton from '../../components/LoadingSkeleton/LoadingSkeleton';
import FilterModal from '../../components/FilterModal/FilterModal';
import RecentlyCompleted from '../../components/RecentlyCompleted/RecentlyCompleted';
import Screens from '../../navigation/ScreenNameList';
import { fetchTasks } from '../../redux/slice/taskSlice';
import { selectFilteredSortedTasks } from '../../redux/slice/filterSlice';
import styles from './TaskListScreenStyles';

const TaskListScreen: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.tasks);
  const filteredSortedTasks = useSelector(selectFilteredSortedTasks);
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks() as any);
  }, [dispatch]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await dispatch(fetchTasks() as any);
    setRefreshing(false);
  }, [dispatch]);

  const applySearch = (tasks: any[]) => {
    if (!searchText.trim()) return tasks;
    return tasks.filter((t) =>
      t.title.toLowerCase().includes(searchText.toLowerCase()) ||
      (t.description && t.description.toLowerCase().includes(searchText.toLowerCase()))
    );
  };

  const tasksToRender = applySearch(filteredSortedTasks);

  const renderHeader = () => (
    <View>
      <RecentlyCompleted />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Tasks</Text>
      </View>
    </View>
  );

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Task List" />
        <View style={styles.topBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search tasks..."
            editable={false}
          />
          <TouchableOpacity style={styles.filterButton} disabled>
            <Icon name="filter-list" size={20} color="white" />
          </TouchableOpacity>
        </View>
        {[...Array(5)].map((_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task List" />
      
      <View style={styles.topBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search tasks..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterVisible(true)}
        >
          <Icon name="filter-list" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasksToRender}
        keyExtractor={item => item?.id?.toString() || Math.random().toString()}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <TaskCard
            onPress={() => navigation.navigate(Screens.ADD_EDIT_TASK, { task: item })}
            item={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No tasks found</Text>
            <Text style={styles.emptySubtitle}>
              {searchText
                ? 'Try adjusting your search or filters'
                : 'Create your first task to get started'}
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate(Screens.ADD_EDIT_TASK)}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>

      <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />
    </SafeAreaView>
  );
};

export default TaskListScreen;





