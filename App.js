/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput
} from 'react-native';


export default class App extends Component{

  constructor(props)
  {
    super(props);

    this.state = {
      nome: '',
    }

    AsyncStorage.getItem("nome").then(value=>{
      this.setState({nome:value});
    })

    this.setNome = this.setNome.bind(this);
  }

  setNome(nome)
  {
    let s = this.state;
    s.nome = nome;

    this.setState(s);

    AsyncStorage.setItem("nome", nome);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.nome} 
          onChangeText={text =>this.setNome(text)}
          style={styles.textInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textInput:
  {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    fontSize: 18,
    width: 250,
  },
});
