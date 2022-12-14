import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Icon} from '@rneui/themed';
function MineScreen({navigation}) {
  return (
    <Header
      centerComponent={{text: '我的', style: styles.heading}}
      rightComponent={
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="settings" color="white" />
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

export default MineScreen;
