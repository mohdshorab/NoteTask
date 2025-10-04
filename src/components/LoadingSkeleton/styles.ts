import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.grayBorder,
  },
  titleSkeleton: {
    height: 18,
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: colors.skeletonBase,
  },
  descSkeleton: {
    height: 14,
    borderRadius: 4,
    marginBottom: 8,
    width: '70%',
    backgroundColor: colors.skeletonBase,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateSkeleton: {
    height: 12,
    width: 100,
    borderRadius: 4,
    backgroundColor: colors.skeletonBase,
  },
  prioritySkeleton: {
    height: 24,
    width: 60,
    borderRadius: 12,
    backgroundColor: colors.skeletonBase,
  },
});

export default styles;