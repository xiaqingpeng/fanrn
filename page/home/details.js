import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function DetailsScreen(navigate) {
  console.log(navigate);
  return (
    <View style={styles.container}>
      <Text>Details!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
