import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  centeredContent: {justifyContent: 'center', alignItems: 'center'},
});

const Loading = () => {
  return (
    <View style={[styles.container, styles.centeredContent]}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
