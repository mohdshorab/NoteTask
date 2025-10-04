import { Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import styles from './HeaderStyle';

type HeaderProps = {
  title: string;
  navigation?: any;
  canGoBack?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, navigation, canGoBack = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {canGoBack && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        {/* Placeholder for future right icons or actions */}
      </View>
    </View>
  );
};

export default Header;
