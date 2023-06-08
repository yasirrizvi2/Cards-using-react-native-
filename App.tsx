import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import FlatCards from './compnents/FlatCards';
import ElevatedCards from './compnents/ElevatedCards';
import FancyCards from './compnents/FancyCards';
import ActionCard from './compnents/ActionCard';
import ContactList from './compnents/ContactList';

 const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text> My application</Text>
        
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <ContactList/>
        <ActionCard/>
        <ScrollView horizontal={true}>
          <ContactList/>
          <ActionCard/>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
 
  )
}

export default App;