import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';
import CurrentMembers from './Components/CurrentMembers'
import { StackNavigator } from 'react-navigation';


const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'steelblue',
    padding: 10,
  },
  appContainer: {
    padding: 10,
    margin: 10
  },
  bgImage: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'cover'
  }
})

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.appContainer}>
        <Image source={{uri:"http://static1.squarespace.com/static/5833460bd1758efbf2e11826/t/584ec91eb8a79bf389f059bf/1481558302488/unnamed.png?format=1000w"
}} style={styles.bgImage}/>
        <Text>Welcome to Midtown West home group!</Text>
        <Text>Our aim is to create a safe haven for everyone.</Text>
        <Text>We will be building a tightly knit community that pursues Jesus and the Gospel.</Text>
        <View style={styles.buttonContainer}>
        <Button title='See members' onPress={() => navigate('SignUp')} color="white"/>
        </View>
      </ScrollView>
    )
  }
}

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SignUp: {screen: CurrentMembers}
});


