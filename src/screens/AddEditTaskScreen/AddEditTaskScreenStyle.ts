import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.background,
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: typography.fontSizeMedium,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  inputBoxTitle: {
    fontSize: 28,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    textAlignVertical: 'top',
    fontFamily: typography.fontFamilyRegular,
    color: colors.textPrimary,
    backgroundColor: colors.background,
  },
  inputBoxDesc: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    textAlignVertical: 'top',
    height: 120,
    fontFamily: typography.fontFamilyRegular,
    color: colors.textPrimary,
    backgroundColor: colors.background,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priorityButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  priorityText: {
    fontWeight: 'bold',
    fontSize: typography.fontSizeMedium,
    color: colors.textPrimary,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    backgroundColor: colors.background,
    marginBottom: 8,
  },
  datePickerText: {
    fontSize: typography.fontSizeMedium,
    color: colors.textPrimary,
  },
  clearDateButton: {
    alignSelf: 'center',
    padding: 8,
  },
  clearDateText: {
    color: colors.error,
    fontSize: typography.fontSizeSmall,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
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
    borderWidth: 2,
  },
  errorText: {
    color: colors.error,
    fontSize: typography.fontSizeSmall,
    marginBottom: 8,
  },
});

export default styles;
