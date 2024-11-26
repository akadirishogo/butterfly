import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/constants/Colors'
import Fonts from '@/constants/fonts'

const { width, height } = Dimensions.get('window');


const Header = () => {
  return (
    <View style={styles.header}>
        <StatusBar backgroundColor={Colors.Primary}/>
        <View style={styles.innerHeader}>
            <View style={styles.imageContainer}>
                <Image source={require('../../../assets/images/testProfile.jpg')} style={{height: '100%', width: '100%', borderRadius: 22}} /> 
            </View>

            <View style={styles.profileName}>
                <Text style={styles.greet}>Welcome, </Text>
                <Text style={styles.name}>Winner</Text>
            </View>

            <TouchableOpacity>
                <Ionicons name="menu-outline" size={24} color="black" />
            </TouchableOpacity>   
        </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
    header: {
        height: height * 0.15,
        backgroundColor: Colors.Primary,
        paddingHorizontal: '5%',
        paddingTop: '10%',
    },

    innerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    imageContainer: {
        height: 43,
        width: 43,
        borderRadius: 22,
    },

    profileName: {
        marginLeft: '3%',
        flex: 1,
        
    },

    greet: {
        fontFamily: Fonts.PoppinsMedium,
        color: Colors.Secondary
    },

    name: {
        fontFamily: Fonts.PoppinsMedium,
        color: Colors.Secondary
    },

   
})