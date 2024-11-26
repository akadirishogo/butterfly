import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Fonts from '@/constants/fonts'
import { AntDesign, Entypo } from '@expo/vector-icons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const { width, height } = Dimensions.get('window');


const BodyMenu = () => {
  return (
    <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <Entypo name="plus" size={15} color={Colors.Secondary} />
                </View>
                <Text style={{fontFamily: Fonts.PoppinsMedium, color: Colors.Secondary}}>Deposit</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <Entypo name="minus" size={15} color={Colors.Secondary} />
                </View>
                <Text style={{fontFamily: Fonts.PoppinsMedium, color: Colors.Secondary}}>Withdraw</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <AntDesign name="swap" size={15} color={Colors.Secondary} />
                </View>
                <Text style={{fontFamily: Fonts.PoppinsMedium, color: Colors.Secondary}}>Transfer</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <FontAwesome6 name="hand-holding-dollar" size={15} color={Colors.Secondary} />
                </View>
                <Text style={{fontFamily: Fonts.PoppinsMedium, color: Colors.Secondary}}>Receive</Text>
            </View>

        </View>
  )
}

export default BodyMenu

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 5,
        //backgroundColor: 'green',
        height: height * 0.15,
        gap: 13,
        flexDirection: 'row',
        alignItems: 'center'
    },

    card: {
        height: '85%',
        width: '22%',
        //backgroundColor: 'yellow',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 15,
        backgroundColor: Colors.Primary,
        alignItems: 'center',
        justifyContent: 'center'
    },

})