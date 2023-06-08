import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    
    <View >
      <View>
      <Text style={styles.topText}>Fancy Card</Text>
      </View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg/330px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg',
          }}
          style={[styles.cardImage]}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa-mahal</Text>
        <Text style={styles.cardLabel}>Pink-City, Jaipur , Rajasthan</Text>
        <Text style={styles.cardDiscription}>
          hawa mahal is a palace in jaipur, India.Buid from Red and Pink sand
          stone.It is on the edge of the city palace.
        </Text>
         <Text style={styles.cardFooter}>12 mins away</Text>
      </View>


      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  topText:{
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:12
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 8,
  },

  card: {
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizonntal:14
    
  },

  cardElevated: {
    backgroundColor: '#ffffff',
    elevation:6,
    shadowOffset:{
     width:1,
     height:1,
     marginTop:8
    }
  },
  cardImage: {
    height: 180,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    marginLeft:8,
     backgroundColor: '#ffffff',
    elevation:6,
    shadowOffset:{
     width:1,
     height:1,
     marginTop:8
    }
  },

  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },

  cardTitle: {
    color:'#9900cc',
    fontSize: 22,
    fontWeight:'bold',
    marginBottom:4
  },

  cardLabel: {
    color:'#ff9933',
    fontSize: 14,
    marginBottom:4
  },

  cardDiscription: {
    color:'#758283',
    fontSize: 14,
    // marginBottton:12,
    marginTop:8,
    flexShrink:1
  },

  cardFooter:{
    marginTop:8,
    color:'#ff0066'
  }
});
