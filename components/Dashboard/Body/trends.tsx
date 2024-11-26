import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Fonts from '@/constants/fonts'
import { Colors } from '@/constants/Colors'

const Trends = () => {
  return (
    <View style={styles.container}>
        <View style={styles.trendBar}>
            <View style={styles.imageContainer}>
                <Image source={require('@/assets/images/bitcoin_symbol.png')} style={styles.image} />
            </View>
            <View style={styles.descriptions}>
                <Text style={{fontFamily: Fonts.PoppinsSemi, marginBottom: -3}}>BTC</Text>
                <Text style={{fontSize: 10, color: Colors.darkGreen}}>+365%</Text>
            </View> 

            <View style={styles.figures}>
                <Text style={{fontFamily: Fonts.PoppinsSemi, marginBottom: -3, textAlign: 'right'}}>0.544309</Text>
                <Text style={{fontSize: 10, color: Colors.darkGreen, textAlign: 'right'}}>0.005%</Text>
            </View>     
        </View>
    </View>
  )
}

export default Trends

const styles = StyleSheet.create({
    container: {
      marginTop: 6,
      flex: 1,
      //backgroundColor: 'red'
    },
  
    trendBar: {
      width: '100%',
      height: 41,
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: '#ddd',
      borderRadius: 15,
      alignItems: 'center',
      paddingHorizontal: 10
    },
  
   barText: {
      color: Colors.Secondary,
      fontSize: 15
    },

    imageContainer: {
        height: 25,
        width: 25,
        borderRadius: 15,
    },

    image: {
        height: '100%',
        width: '100%'
    },

    descriptions: {
        marginLeft: 5,
        flex: 1
    },

    figures: {

    }
  })