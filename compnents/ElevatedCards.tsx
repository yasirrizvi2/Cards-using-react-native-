import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>bboxes</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        color:'blue',
        paddingHorizontal: 8
        },

     container:{
        padding:10
        },

    card:{
        flex:1,
        height:100,
        width:100,
        borderRadius:8,
        margin:10
    },

    cardElevated:{
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        elevation:40,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor:'red'
    }

 
})