import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'

class GameBoard extends Component {
  constructor() {
    super()
    this.state = {
      boards: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      visited: [false, false, false, false, false, false, false, false, false],
      avail: [],
      result: 'Playing',
      endGame: false,
      disabled: true,
    }
  }


  setStatus(num) {
    let boards = this.state.boards
    let visited = this.state.visited
    let avail = this.state.avail
    let result = this.state.result
    let endGame = this.state.endGame
    let counter = 0
    counter++
    visited[num] = true
    visited.forEach((item, index) => {
      if (item === false) {
        avail.push(index)
      }
    })
    const arrAvail = avail
    const getRand = arrAvail[Math.floor(Math.random() * arrAvail.length)];
    if (boards[num] === 0) {
      boards[num] = 1
      boards[getRand] = 2
      visited[getRand] = true
    }

    if (boards[0] === 1 && boards[1] === 1 && boards[2] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[3] === 1 && boards[4] === 1 && boards[5] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[6] === 1 && boards[7] === 1 && boards[8] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[0] === 1 && boards[3] === 1 && boards[6] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[1] === 1 && boards[4] === 1 && boards[7] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[2] === 1 && boards[5] === 1 && boards[8] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[0] === 1 && boards[4] === 1 && boards[8] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[2] === 1 && boards[4] === 1 && boards[6] === 1) {
      result = 'You Win'
      endGame = true
    }
    else if (boards[0] === 2 && boards[1] === 2 && boards[2] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if (boards[3] === 2 && boards[4] === 2 && boards[5] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if (boards[6] === 2 && boards[7] === 2 && boards[8] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if (boards[0] === 2 && boards[3] === 2 && boards[6] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if (boards[1] === 2 && boards[4] === 2 && boards[7] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if (boards[2] === 2 && boards[5] === 2 && boards[8] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if (boards[0] === 2 && boards[4] === 2 && boards[8] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if (boards[2] === 2 && boards[4] === 2 && boards[6] === 2) {
      result = 'You Lose'
      endGame = true
    }
    else if(counter===9){
      result = 'Draw'
      endGame = true
    }

    avail = []
    this.setState({ result: result })
    this.setState({ boards: boards, visited: visited, avail: avail, result: result, endGame: endGame })
  }

  reset() {
    let boards = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let visited = [false, false, false, false, false, false, false, false, false]
    let result = 'Playing'
    let endGame = false
    this.setState({ boards: boards, visited: visited, result: result, endGame: endGame })
  }

  renderCondition(num) {
    if (this.state.boards[num] === 1) {
      return (
        <Image
          style={{ width: 95, height: 95, alignSelf: 'center' }}
          source={{ uri: this.props.imageSend }}
        />
      )
    }
    else if (this.state.boards[num] === 0) {
      return (
        <Image
          style={{ width: 95, height: 95, alignSelf: 'center' }}
          source={{ uri: './white.png' }}
        />
      )
    }
    else if (this.state.boards[num] === 2) {
      return (
        <Image
          style={{ width: 95, height: 95, alignSelf: 'center' }}
          source={{ uri: this.props.imageEnemy }}
        />
      )
    }
  }
  render() {
    const { result, endGame, disabled } = this.state
    
    return (
      <View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }}
          >
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(0)}>
              {
                this.renderCondition(0)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(0)}>
              {
                this.renderCondition(0)
              }
            </TouchableOpacity>
            )
          }
            
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }}>
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(1)}>
              {
                this.renderCondition(1)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(1)}>
              {
                this.renderCondition(1)
              }
            </TouchableOpacity>
            )
          }
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }}>
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(2)}>
              {
                this.renderCondition(2)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(2)}>
              {
                this.renderCondition(2)
              }
            </TouchableOpacity>
            )
          }
          </View>

        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }} >
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(3)}>
              {
                this.renderCondition(3)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(3)}>
              {
                this.renderCondition(3)
              }
            </TouchableOpacity>
            )
          }
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }} >
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(4)}>
              {
                this.renderCondition(4)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(4)}>
              {
                this.renderCondition(4)
              }
            </TouchableOpacity>
            )
          }
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }} >
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(5)}>
              {
                this.renderCondition(5)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(5)}>
              {
                this.renderCondition(5)
              }
            </TouchableOpacity>
            )
          }
          </View>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }} >
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(6)}>
              {
                this.renderCondition(6)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(6)}>
              {
                this.renderCondition(6)
              }
            </TouchableOpacity>
            )
          }
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }} >
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(7)}>
              {
                this.renderCondition(7)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(7)}>
              {
                this.renderCondition(7)
              }
            </TouchableOpacity>
            )
          }
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2 }} >
          {
            endGame ? (
              <TouchableOpacity disabled={disabled} onPress={() => this.setStatus(8)}>
              {
                this.renderCondition(8)
              }
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setStatus(8)}>
              {
                this.renderCondition(8)
              }
            </TouchableOpacity>
            )
          }
          </View>
        </View>
        <View style={{ marginTop: 80 }}>
          <Button
            onPress={() => this.reset()}
            title="Reset"
            color="red"
            accessibilityLabel="Reset For Begin Again"
          />
          <Text style={{alignSelf:'center', marginTop: 20, fontSize: 15, color:'blue'}}>Status : {this.state.result}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  board: {
    borderWidth: 10,
    height: 10
  }
})


export default GameBoard