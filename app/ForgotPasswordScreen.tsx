import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Fonts from '@/constants/fonts';
import { useRouter } from 'expo-router';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const sendCode = () => {
        setLoading(true)
        //await send email
        setLoading(false)
        router.push('/ResetPassword')
    }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/padlock.png')} style={{height:'80%', width: '70%'}} />
        </View>
        <Text style={styles.header}>Forgot Password</Text>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Please enter your email address to reset your password</Text>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.inputTwo}>
                <TextInput
                placeholder='Enter email...'
                keyboardType='default'
                value={email}
                onChangeText={setEmail} 
                />
            </View>  
        </View> 

        <TouchableOpacity style={styles.button} onPress={sendCode}>
          <Text style={styles.buttonText}>Send code</Text>
        </TouchableOpacity>
      </View> 
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: '5%',
      },
    inputContainer: {
        marginTop: '3%',
        width: '100%',
        //backgroundColor: 'red',
        height: '30%',
      },

      body: {
        paddingHorizontal: 20,
        flex: 1
      },
      
      header: {
        fontFamily: Fonts.PoppinsSemi,
        fontSize: 25,
        marginTop: '1%',
        color: Colors.Secondary,
        textAlign: 'center',
        //backgroundColor: 'green'
      },
      
      subHeader: {
          width: '105%',
          marginBottom: '5%'
      },
      
      subHeaderText: {
        fontSize: 16,
        color: "#8a8a8a",
        textAlign: 'center'
      },

      inputTwo: {
        height: 55,
        width: '100%',
        borderColor: Colors.textInputBorder,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8,
        justifyContent: 'center',
      },

      imageContainer: {
        height: '45%',
        width: '100%',
        //marginTop: '5%',
        //padding: '3%',
        justifyContent: 'center',
        alignItems: 'center'
      },

      button: {
        backgroundColor: Colors.Primary,
        padding: "5%",
        borderRadius: 30,
        justifyContent: 'center',
        //marginHorizontal: '5%',
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 15,
        color: Colors.Secondary
    },
    

})