import { StyleSheet } from "react-native";
import typography from "../../theme/typography";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: typography.fontSizeLarge,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 12,
    marginHorizontal: 16,
  },
});
export default styles;
