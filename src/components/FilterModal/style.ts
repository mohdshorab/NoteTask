import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 20,
    maxHeight: '80%',
  },
  header: {
    fontSize: typography.fontSizeLarge,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: typography.fontSizeMedium,
    fontWeight: '600',
    color: colors.textPrimary,
    marginTop: 16,
    marginBottom: 8,
  },
  optionGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    backgroundColor: colors.background,
  },
  selectedOption: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: typography.fontSizeSmall,
    color: colors.textPrimary,
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  resetButton: {
    backgroundColor: colors.error,
  },
  applyButton: {
    backgroundColor: colors.success,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: typography.fontSizeMedium,
  },
});

export default styles;