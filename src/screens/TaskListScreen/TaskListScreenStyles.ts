import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.background,
    fontSize: typography.fontSizeMedium,
    color: colors.textPrimary,
  },
  filterButton: {
    marginLeft: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: typography.fontSizeLarge,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  btnText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 100,
  },
  emptyTitle: {
    fontSize: typography.fontSizeLarge,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: typography.fontSizeMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default styles;
