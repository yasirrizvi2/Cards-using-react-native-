import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>majenta </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
  fontSize:24,
  fontWeight: 'bold',
  color: 'magenta',
  paddingHorizontal: 8
  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:10
  },

  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:100,
    borderRadius:4,
    margin:8
  },

  cardOne:{
    backgroundColor: 'red'
  },

  cardTwo:{
    backgroundColor: 'magenta'
  },

  cardThree:{
    backgroundColor: 'yellow'
  }

 
})