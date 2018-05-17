import React, { Component } from 'react'
import { getParam,View, Text } from 'react-native'

  ;
class AboutScreen extends Component {
  constructor() {
    super()
    this.state = {
      navigation: 0
    }
  }
  static navigationOptions = {
    title: 'About'
  }
  render() {
    return (
      <View>
        <Text>This is Rick And Marty Simple Tic Tac Toe Game</Text>
      </View>
    )
  }
}

export default AboutScreen