import { Text, View } from 'react-native';
import React, {Component} from 'react'

export default class Feed extends Component() {
  render(){
    return (
        <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
            <Text>Feed</Text>
        </View>
    );
  }
}
