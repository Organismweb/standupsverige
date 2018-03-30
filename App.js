import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { List, ListItem  } from "react-native-elements";
import Moment from 'moment';

export default class App extends Component {
  constructor() {
    super()

    var dt = '2018-06-18';
    var date = Moment(dt).format('D/M')

    this.state = {
      imageSource: require("./avatar.jpg"),
      data: [
        { title: 'Big Ben', date: date, price: 0 },
        { title: 'Andra Lång Comedy', date: date, price: 0  },
        { title: 'Harrys standup', date: date, price: 0 },
        { title: 'Garva Göteborg', date: date, price: 0 },
        { title: 'Brooklyn Haha', date: date, price: 0 },
        { title: 'Flygarns haga comedy', date: date, price: 0 },
        { title: 'El skratto', date: date, price: 0 },
        { title: 'Björns skrattfest', date: date, price: 0 },
      ]
    }
  }

  render() {
    Moment.locale('sv');

    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 100, padding: 30 }}>
        <FlatList
          data={ this.state.data }
          renderItem={({item}) => (
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Image source={this.state.imageSource} style={{ width: 40, height: 40 }} />
              <Text>{item.title} | {item.date} | {item.price} kr</Text>
            </View>
          )}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    marginTop: 150,
    fontSize: 30
  },
  list: {
    marginTop: 20
  }
});
