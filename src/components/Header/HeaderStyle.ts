import { StyleSheet } from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
    paddingHorizontal: 16,
  },
  leftContainer: {
    width: 40,
    justifyContent: 'center',
  },
  backButton: {
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: typography.fontSizeLarge,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  rightContainer: {
    width: 40,
  },
});

export default styles;
