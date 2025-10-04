import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.background,
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 50,
    padding: 10,
    position: 'absolute',
    right: 30,
    bottom: 50,
    backgroundColor: colors.background,
  },
  btnText: {
    fontSize: 30,
    color: colors.primary,
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
    fontFamily: typography.fontFamilyRegular,
    color: colors.textPrimary,
  },
  noTaskFoundText: {
    alignSelf: 'center',
    color: colors.textSecondary,
    fontSize: typography.fontSizeMedium,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
