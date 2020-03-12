/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  List,
  ListView,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [date, setState] = useState([]);

  /*function chama() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setState({dados: responseJson});
        setVetor([ //Com vetor
          ...state,
          {login: responseJson.login, bio: responseJson.bio},
        ]);
      });
  }*/

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setState({dados: responseJson});
        /*setVetor([ //Com vetor
        ...state,
        {login: responseJson.login, bio: responseJson.bio},
      ]);*/
      });
  });

  return (
    <View style={styles.Main}>
      <View style={styles.header}>
        <Text style={styles.Titulo}>Ajuda</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={date.dados}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.box}>
                <Text>{item.id}</Text>
                <Text style={styles.username}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Main: {
    width: 420,
    height: 900,
    flexDirection: 'column',
  },
  header: {
    justifyContent: 'center',
    height: 110,
    width: '100%',
    backgroundColor: '#fffdf9',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 150,
    width: '100%',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    padding: 30,
    backgroundColor: '#ee5242',
    height: 900,
  },
  box: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  username: {
    color: '#ee5242',
    fontSize: 22,
  },
  Titulo: {
    color: 'orange',
    fontSize: 25,
    fontStyle: 'italic',
    padding: 30,
  },
});
