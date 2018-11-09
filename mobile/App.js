import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
           title="Scan"
           color="black"
           styles={styles.button}
           onPress={() => {}}
           accessibilityLabel="Learn more about this purple button"
        />
        <Text>ChhhChhhCHhhh</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    padding: 20
  }
});
