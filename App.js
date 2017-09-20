import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CurrentMembers from './Components/CurrentMembers'
import { StackNavigator } from 'react-navigation';


const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'steelblue',
    padding: 10
  }
})

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text>Welcome to Midtown West home group!</Text>
        <Text>Our aim is to create a safe haven for everyone.</Text>
        <Text>We will be building a tightly knit community that pursues Jesus and the Gospel.</Text>
        <View style={styles.buttonContainer}>
        <Button title='See members' onPress={() => navigate('SignUp')} color="white"/>
        </View>
      </View>
    )
  }
}

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SignUp: {screen: CurrentMembers}
});


