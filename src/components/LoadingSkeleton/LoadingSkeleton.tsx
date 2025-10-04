import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import styles from './styles';

const LoadingSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSkeleton} />
      <View style={styles.descSkeleton} />
      <View style={styles.row}>
        <View style={styles.dateSkeleton} />
        <View style={styles.prioritySkeleton} />
      </View>
    </View>
  );
};

export default LoadingSkeleton;
