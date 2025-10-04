import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.background,
  },
  inputBoxTitle: {
    fontSize: 28,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
    textAlignVertical: 'top',
    fontFamily: typography.fontFamilyRegular,
    color: colors.textPrimary,
  },
  inputBoxDesc: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 10,
    padding: 5,
    fontWeight: '300',
    marginVertical: 10,
    textAlignVertical: 'top',
    height: 150,
    fontFamily: typography.fontFamilyRegular,
    color: colors.textPrimary,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  discardButton: {
    backgroundColor: colors.error,
  },
  saveButton: {
    backgroundColor: colors.success,
  },
  deleteButton: {
    backgroundColor: colors.error,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: typography.fontSizeMedium,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 1,
  },
  errorText: {
    color: colors.error,
    fontSize: typography.fontSizeSmall,
    marginTop: 4,
    marginBottom: 8,
  },
});

export default styles;
