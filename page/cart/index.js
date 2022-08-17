import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
function CartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Cart screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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

export default CartScreen;
