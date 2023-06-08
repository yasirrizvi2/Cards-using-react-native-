import {Linking, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Whats new in Javascript-12  ES-12.</Text>
        </View>
        <Image
          source={{
            uri: 'https://shorturl.at/buSUX',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Just like every year, Javascript bring's new features. This yearJavascript is brinnging 4 new features which are al almost in production rollout. I won't be wasting much time and directly jump to code with eazy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <Text numberOfLines={3}>
                Just like every year, Javascript bring's new features. This yearJavascript is brinnging 4 new features which are al almost in production rollout. I won't be wasting much time and directly jump to code with eazy to understand examples.
            </Text>
        </View>
        <View  style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwjOw_T657D_AhWyg2MGHctWDPUQPAgI')}
            >
                <Text style={styles.socialLink}>view more.</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwjOw_T657D_AhWyg2MGHctWDPUQPAgI')}
            >
                <Text  style={styles.socialLink}>follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,    
  },

  card: {
    width:340,
    height:450,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
  },

  elevatedCard: {
    backgroundColor:'#E5D68A',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1
    },
    shadowcolor:'#333',
    shadowOpacity: 0.5,
  },


  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

  headerText: {
    color:'#000',
    fontSize:16,
    fontWeight:"600",
  },

  cardImage: {
    height: 200,
  },

  bodyContainer:{
    padding:10,

  },

  footerContainer:{
    padding:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },

  socialLink:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#FFF',
    paddingHorizontal:6,
    paddingVertical:2,
    borderRadius:6
  },
});
