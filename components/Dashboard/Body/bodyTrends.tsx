import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '@/constants/fonts'
import { Colors } from '@/constants/Colors'
import Trends from './trends'

const { width, height } = Dimensions.get('window');


const BodyTrends = () => {
  const [style, setStyle] = useState(styles.buttonOne)
  const [activeButton, setActiveButton] = useState(0)

  const buttons = ['Top Gainers', 'Top Losers']; 

  const handlePress = (buttonIndex) => {
    setActiveButton(buttonIndex);
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            {buttons.map((label, index) => (
              <TouchableOpacity key={index} style={[styles.buttonOne, 
                activeButton === index && styles.activeButton
              ]}  onPress={() => handlePress(index)}>
                <Text style={styles.buttonText}>{label}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
    </View>
  )
}

export default BodyTrends

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingBottom: 80
  },

  header: {
    width: '100%',
    height: 44,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15
  },

  buttonOne: {
    //backgroundColor: Colors.Primary, 
    width: '50%', 
    alignItems: 'center', 
    justifyContent: 'center',
    fontFamily: Fonts.PoppinsMedium,
    borderWidth: 0.3,
    borderColor: '#fff',
  },

  

  activeButton: {
    borderRadius: 15, 
    backgroundColor: Colors.Primary
  },

  buttonText: {
    color: Colors.Secondary,
    fontSize: 15
  }
})