import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import Fonts from '@/constants/fonts'

const SignUpScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [country, setCountry] = useState('Nigeria')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/images/headerLogoBlack.png')} />
        </View>
        <View style={styles.body}>
            <Text style={styles.headerTwo}>Sign Up</Text>
            <View style={styles.inputContainer}>
            <Text style={{fontFamily: Fonts.PoppinsRegular, marginLeft: '2%'}}>First Name</Text>
            <View style={styles.inputTwo}>
                <TextInput
                    placeholder='Enter First Name...'
                    keyboardType='default'
                    value={firstName}
                    onChangeText={setFirstName} 
                />

            </View>  

            <Text style={{fontFamily: Fonts.PoppinsRegular, marginLeft: '2%'}}>Last Name</Text>
            <View style={styles.inputTwo}>
                <TextInput
                    placeholder='Enter Last Name...'
                    keyboardType='default'
                    value={lastName}
                    onChangeText={setLastName} 
                />

            </View>

            <Text style={{fontFamily: Fonts.PoppinsRegular, marginLeft: '2%'}}>Email</Text>
            <View style={styles.inputTwo}>
                <TextInput
                    placeholder='Enter Email...'
                    keyboardType='default'
                    value={email}
                    onChangeText={setEmail} 
                />

            </View>  


            <Text style={{fontFamily: Fonts.PoppinsRegular, marginLeft: '2%'}}>Password</Text>
            <View style={styles.inputTwo}>
                <TextInput
                    placeholder='Enter password...'
                    keyboardType='default'
                    value={password}
                    onChangeText={setPassword} 
                />

            </View>  

            <Text style={{fontFamily: Fonts.PoppinsRegular, marginLeft: '2%'}}>Country</Text>
            <View style={styles.inputTwo}>
                <TextInput
                    keyboardType='default'
                    value={country}
                    onChangeText={setCountry} 
                />

            </View>    
            </View>
            
        </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        backgroundColor: '#fff'
    },

    header: {
        alignItems: 'center'
    },

    headerTwo: {
        fontFamily: Fonts.PoppinsSemi,
        fontSize: 25,
        marginTop: '6%',
        color: Colors.Secondary
      },

    body: {
        flex: 1,
        //marginTop: '5%',
        backgroundColor: '#fff'
    },
    inputTwo: {
        height: 40,
        borderColor: Colors.textInputBorder,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%',
      },

      inputContainer: {
        marginTop: '2%'
      }
})