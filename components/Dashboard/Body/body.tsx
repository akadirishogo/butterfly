import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '@/constants/fonts'
import BodyMenu from './bodyMenu'
import BodyAdvert from './bodyAdverts'
import BodyTrends from './bodyTrends'
import { Colors } from '@/constants/Colors'
import Feather from '@expo/vector-icons/Feather';

const Body = () => {
    const [balanceVisible, setBalanceVisible] = useState(true)

    const hideSeeBalance = () => {
       if (balanceVisible) {
        setBalanceVisible(false)
       } else {
        setBalanceVisible(true)
       }
    }

  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollContent}>
            <View style={styles.subHeader}>
                <View style={{flex: 1}}>
                    <Text style={styles.balance}>Your Balance</Text>
                    <View>
                        {!balanceVisible ? 
                            <Text style={styles.earnings}>****</Text>
                            :
                            <Text style={styles.earnings}>$150.58</Text>
                        }
                    </View>
                </View>
                <TouchableOpacity onPress={hideSeeBalance}>
                        {!balanceVisible ? 
                        <Feather name="eye-off" size={20} color={Colors.Secondary} />
                         :  
                         <Feather name="eye" size={20} color={Colors.Secondary} />
                        }
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: '5%'}}>
                <View style={styles.earn}>
                    <Image source={require('../../../assets/images/wallet.png')} 
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.earnText}>Earnings</Text>
                    <Text style={styles.earnAmount}>$20.34</Text>
                </View>
                <BodyMenu />
                <BodyAdvert />
                <BodyTrends />
            </View>
        </ScrollView>
        <View>

        </View>
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    scrollContent: {
      //paddingHorizontal: '5%',
      paddingTop: 5,
      flexGrow: 1, 
    },
    earn: {
      borderWidth: 1,
      padding: 5, 
      borderColor: '#ddd',
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 2, // Add spacing to separate from other components
    },
    image: {
      width: 40, // Adjust image size
      height: 40,
      marginRight: 12, // Add spacing between image and text
    },
    earnText: {
      fontFamily: Fonts.PoppinsMedium,
      flex: 1,
      color: '#222222',
    },
    earnAmount: {
      fontFamily: Fonts.PoppinsMedium,
      color: '#222222',
    },

    subHeader: {
        marginTop: -6,
        marginBottom: 10,
        backgroundColor: Colors.Primary,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        flexDirection: 'row',
        alignItems: 'center'
    },

    earnings: {
        fontFamily: Fonts.PoppinsSemi,
        fontSize: 30,
        color: Colors.Secondary
    },

    balance: {
        fontFamily: Fonts.PoppinsMedium,
        color: Colors.Secondary
    },
  });