import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../../types/taskTypes';
import colors from '../../theme/colors';
import styles from './TaskCardStyles';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/slice/taskSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const dispatch = useDispatch();
  const toggleCompleted = () => {
    dispatch(updateTask({ ...item, completed: !item.completed }));
  };

  const now = new Date();
  const dueDate: Date | null = item.due_date ? new Date(item.due_date) : null;
  const isOverdue = dueDate !== null ? dueDate < now && !item.completed : false;

  return (
    <TouchableOpacity
      style={[styles.card, item.completed && styles.completedCard]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.row}>
        <TouchableOpacity
          onPress={toggleCompleted}
          style={styles.tickContainer}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <Icon
            name={item.completed ? 'check-circle' : 'radio-button-unchecked'}
            size={28}
            color={item.completed ? colors.success : colors.grayBorder}
          />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={[styles.title, item.completed && styles.completedTitle]}>
            {item.title}
          </Text>

          {item.description ? (
            <Text
              style={[
                styles.description,
                item.completed && styles.completedText,
              ]}
              numberOfLines={2}
            >
              {item.description}
            </Text>
          ) : null}

          {dueDate !== null && (
            <Text
              style={[
                styles.dueDate,
                isOverdue && styles.overdueDate,
                item.completed && styles.completedText,
              ]}
            >
              Due: {dueDate.toDateString()}
            </Text>
          )}

          <Text
            style={[styles.updatedAt, item.completed && styles.completedText]}
          >
            Updated: {formatDate(item.updated_at)}
          </Text>

          {/* Priority badge aligned to right within .content */}
          {item.priority && (
            <View
              style={[
                styles.priorityBadge,
                {
                  backgroundColor:
                    priorityColors[item.priority] || colors.priorityMedium,
                },
                item.completed && styles.completedBadge,
                { alignSelf: 'flex-end', marginTop: 6 },
              ]}
            >
              <Text style={styles.priorityText}>{item.priority}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
