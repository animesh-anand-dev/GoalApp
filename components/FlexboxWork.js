import React from 'react';
import { Text, View } from 'react-native';

export default function FlexboxWork() {
  return (
    <View style={{ 
        padding: 50, 
        flexDirection: 'row', 
        width: '80%', 
        height: 300, 
        justifyContent: 'center', 
        alignItems:'center' 
        }}>
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Text style={{color:'white'}}>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text style={{color:'white'}}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Text style={{color:'white'}}>3</Text>
      </View>
    </View>
  );
}
