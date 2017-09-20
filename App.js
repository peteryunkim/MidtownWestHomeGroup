import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CurrentMembers from './Components/CurrentMembers'
import { StackNavigator } from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
      // <View style={styles.container}>
      //   <Text>Welcome to Midtown West home group!</Text>
      //   <Text>Our aim is to create a safe haven for everyone.</Text>
      //   <Text>We will be building a tightly knit community that pursues Jesus and the Gospel.</Text>
      //   <CurrentMembers />
      // </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },
// });


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },
// });

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
        <Button title='See members' onPress={() => navigate('SignUp')}/>
      </View>
    )
  }
}

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SignUp: {screen: CurrentMembers}
});

