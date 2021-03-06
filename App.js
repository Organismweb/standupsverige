import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { List, ListItem  } from "react-native-elements";
import Moment from 'moment';

export default class App extends Component {
  constructor() {
    super()

    var dt = '2018-06-18';
    var date = Moment(dt).format('D/M')

    this.state = {
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
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.heading }>StandApp</Text>
        </View>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 100, padding: 30 }}>
          <FlatList
            style={ styles.list }
            data={ this.state.data }
            renderItem={({item}) => (
              <View style={styles.listItemView}>
                <Text style={ styles.listItemViewText }>{item.title} | {item.date} | {item.price} kr</Text>
              </View>
            )}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 100,
    height: 100,
    backgroundColor: "black",
    width: "100%",
    paddingLeft: 30,
    justifyContent: 'center',
  },
  select: {
    fontSize: 20,
    marginTop: 30,
    color: "yellow"
  },
  heading: {
    fontSize: 24,
    marginTop: 30,
    color: "white"
  },
  list: {
    paddingLeft: 20,
    borderLeftColor: "yellow",
    borderLeftWidth: 5,
  },
  listItemView: {
    flexDirection: 'row',
    marginBottom: 15
  },
  listItemViewText: {
    fontSize: 18
  }
});
