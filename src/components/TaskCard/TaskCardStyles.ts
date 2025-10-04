import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.grayBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  completedCard: {
    backgroundColor: '#f8f8f8',
    opacity: 0.7,
  },
  content: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: typography.fontSizeMedium,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  description: {
    color: colors.textSecondary,
    fontSize: typography.fontSizeSmall,
    marginBottom: 6,
    lineHeight: 18,
  },
  dueDate: {
    fontSize: typography.fontSizeSmall,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  overdueDate: {
    color: colors.error,
    fontWeight: 'bold',
  },
  updatedAt: {
    color: colors.textSecondary,
    fontSize: typography.fontSizeSmall - 1,
  },
  completedText: {
    color: colors.textSecondary,
  },
  priorityBadge: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
    alignSelf: 'flex-start',
  },
  completedBadge: {
    opacity: 0.6,
  },
  priorityText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: typography.fontSizeSmall,
  },
});


export default styles;
