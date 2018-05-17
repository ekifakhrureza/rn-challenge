import React, { Component } from 'react'
import { Text, View, getParam, TouchableOpacity, Image, Button } from 'react-native'
import GameBoard from './GameBoard'

class DetailScreen extends Component {
  constructor() {
    super()
    this.state = {
      gameStarted: false
    }
  }
  startGame() {
    this.setState({ gameStarted: true })
  }
  render() {
    const { gameStarted } = this.state
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO-NAME');
    const status = navigation.getParam('status', 'NO-STATUS');
    const gender = navigation.getParam('gender', 'NO-GENDER');
    const image = navigation.getParam('image', 'NO-IMAGE');
    const enemy = navigation.getParam('enemy', 'AI')
    const imageEnemy = navigation.getParam('imageEnemy', 'IMAGE-AI')
    return (
      <View>
        {
          gameStarted ? (
            <GameBoard name={name} imageSend={image} enemy={enemy} imageEnemy={imageEnemy} />
          ) : (
              <View>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                  <View style={{ width: 150, height: 150, backgroundColor: 'powderblue' }} >
                    <Text style={{ alignSelf: 'center' }}>{name}</Text>
                    <Image
                      style={{ width: 75, height: 75, alignSelf: 'center', marginTop: 20 }}
                      source={{ uri: image }}
                    />
                    <Text style={{ alignSelf: 'center' }}>YOU</Text>
                  </View>
                  <View style={{ width: 50, height: 150, backgroundColor: 'white' }} >
                    <Text style={{ alignSelf: 'center', marginTop: 70, color: 'red', fontSize: 20 }}>VS</Text>
                  </View>
                  <View style={{ width: 150, height: 150, backgroundColor: 'skyblue' }} >
                    <Text style={{ alignSelf: 'center' }}>{enemy}</Text>
                    <Image
                      style={{ width: 75, height: 75, alignSelf: 'center', marginTop: 20 }}
                      source={{ uri: imageEnemy }}
                    />
                    <Text style={{ alignSelf: 'center' }}>CPU</Text>
                  </View>

                </View>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 180
                }}>

                  <Button
                    onPress={() => this.startGame()}
                    title="Let's Play"
                    color="#841584"
                    accessibilityLabel="Play For Your Pride"
                  />

                </View>
              </View>
            )
        }
      </View>
    )
  }
}

export default DetailScreen