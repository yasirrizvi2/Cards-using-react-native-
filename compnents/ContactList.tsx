import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = 
    [
      {
        uid: 1,
        name: 'name1',
        status: 'satus1',
        imageUrl:'http://surl.li/htswh'
      },
      {
        uid: 2,
        name: 'name2',
        status: 'satus2',
        imageUrl:'http://surl.li/htsxr'
      },
      {
        uid: 3,
        name: 'name3',
        status: 'satus3',
        imageUrl:'http://surl.li/htsye'
      },
      {
        uid: 4,
        name: 'name4',
        status: 'satus4',
        imageUrl:'http://surl.li/htsyi'
      },
      {
        uid: 5,
        name: 'name5',
        status: 'satus5',
        imageUrl:'http://surl.li/htsyl'
      },
    ];
  

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={true}
    
      >
          {contacts.map(({uid, name, status, imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                  <Image
                  source={{
                    uri: imageUrl
                  }}
                  style={styles.userImage}
                  />
                 <View  >
                 <Text style={styles.userName}>{name}</Text>
                  <Text style={styles.userStatus}>{status}</Text>
                 </View>
                </View>
          ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8, 
  },

  container: {
    paddingHorizontal:16,
    marginBottom:8
  },

  userCard: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:4,
    backgroundColor: '#1FAA59',
    padding:8,
    borderRadius:14
  },

  userImage:{
    height:60,
    width:60,
    borderRadius:60,
    marginRight:12,
    
  },

  userName:{
    fontSize:16,
    fontWeight:'bold'
  },

  userStatus:{
    fontSize: 12,

  },
})