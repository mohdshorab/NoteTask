import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Task } from '../../types/taskTypes';
import colors from '../../theme/colors';
import styles from './TaskCardStyles';

type TaskCardProps = {
  item: Task;
  onPress?: () => void;
};

const priorityColors = {
  High: colors.priorityHigh,
  Medium: colors.priorityMedium,
  Low: colors.priorityLow,
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return (
    date.toLocaleDateString() +
    ' ' +
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
};

const TaskCard: React.FC<TaskCardProps> = ({ item, onPress }) => {
  const now = new Date();
  const dueDate: Date | null = item.due_date ? new Date(item.due_date) : null;
  const isOverdue = dueDate !== null ? dueDate < now && !item.completed : false;

  return (
    <TouchableOpacity
      style={[styles.card, item.completed && styles.completedCard]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={[styles.title, item.completed && styles.completedTitle]}>
          {item.title}
        </Text>

        {item.description ? (
          <Text style={[styles.description, item.completed && styles.completedText]} numberOfLines={2}>
            {item.description}
          </Text>
        ) : null}

        {dueDate !== null && (
          <Text style={[styles.dueDate, isOverdue && styles.overdueDate, item.completed && styles.completedText]}>
            Due: {dueDate.toDateString()}
          </Text>
        )}

        <Text style={[styles.updatedAt, item.completed && styles.completedText]}>
          Updated: {formatDate(item.updated_at)}
        </Text>
      </View>

      {item.priority && (
        <View
          style={[
            styles.priorityBadge,
            { backgroundColor: priorityColors[item.priority] || colors.priorityMedium },
            item.completed && styles.completedBadge,
          ]}
        >
          <Text style={styles.priorityText}>{item.priority}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TaskCard;
