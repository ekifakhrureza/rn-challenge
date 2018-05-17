import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, Button, TouchableNativeFeedback, ScrollView } from 'react-native'
import axios from 'axios'
import { createStackNavigator } from 'react-navigation'
import { getData } from '../store/character/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, ListItem } from 'react-native-elements'
import Search from 'react-native-search-box'


class HomeScreen extends Component {


  fetchData() {
    this.props.getData()
  }

  componentDidMount() {
    this.fetchData()
  }


  _keyExtractor = (item, index) => item.id;
  static navigationOptions = {
    title: 'Pick Character'
  }


  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: "#fff",
        }}
      />
    );
  }


  render() {
    const simbol = this.props.characters.data
    const getRand = simbol[Math.floor(Math.random() * simbol.length)];
    return (
      <ScrollView>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            this.props.characters.data.map((l, i) => (

              <TouchableNativeFeedback
                key={i}
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <ListItem
                  roundAvatar
                  avatar={{ uri: l.image }}
                  key={i}
                  title={l.name}
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                      name: l.name,
                      status: l.status,
                      gender: l.gender,
                      image: l.image,
                      enemy: getRand.name,
                      imageEnemy: getRand.image
                    });
                  }}
                />
              </TouchableNativeFeedback>

            ))
          }
        </List>
      </ScrollView>
    )
  }
}



const mapStateToProps = state => ({
  characters: state.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);