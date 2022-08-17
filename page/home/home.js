import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Icon} from '@rneui/themed';
function HomeScreen({navigation}) {
  return (
    <Header
      leftComponent={
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="location" color="white" type="evilicon" size={32} />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{text: '首页', style: styles.heading}}
      rightComponent={
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="message" color="white" />
          </TouchableOpacity>
        </View>
      }
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: 5,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
