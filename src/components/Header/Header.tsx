import { Text, TouchableOpacity, View } from 'react-native';
import styles from './HeaderStyle';

type HeaderProps = {
  title: string;
  navigation?: any;
  canGoBack?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  title,
  navigation,
  canGoBack = false,
}) => {
  return (
    <View style={styles.container}>
      {canGoBack && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backContainer}
        >
          <Text style={styles.titleText}>{'<'}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Header;
