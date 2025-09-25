import { Text, TouchableOpacity } from 'react-native';
import styles from './TaskCardStyles';

type Item = {
  id: number;
  title: string;
  description: string;
  completed: 0 | 1;
  updated_at: string;
};

type TaskCardProps = {
  item: Item;
  onPress?: () => void;
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
  return (
    <TouchableOpacity
      style={[styles.card, item.completed === 1 && styles.completedCard]}
      onPress={onPress}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.updatedAt}>
        Updated: {formatDate(item.updated_at)}
      </Text>
    </TouchableOpacity>
  );
};

export default TaskCard;
