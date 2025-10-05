import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectRecentlyCompleted } from '../../redux/slice/filterSlice';
import TaskCard from '../TaskCard/TaskCard';
import styles from './styles';

const RecentlyCompleted: React.FC = () => {
  const recentlyCompleted = useSelector(selectRecentlyCompleted);

  if (recentlyCompleted.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently Completed</Text>
      {recentlyCompleted.map((task) => (
        <TaskCard key={task.id} item={task} />
      ))}
    </View>
  );
};

export default RecentlyCompleted;
