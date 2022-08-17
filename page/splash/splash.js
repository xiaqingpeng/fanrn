import * as React from 'react';
import {Button, View, StyleSheet} from 'react-native';

function SplashsScreen({navigation}) {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Button
        title="welcome to fanrn"
        onPress={() => navigation.navigate('TabbarView')}
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

export default SplashsScreen;
