import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Fonts from '../constants/fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const router = useRouter();

const handlePress = () => {
  router.push('/PhoneVerificationScreen')
}

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Phone number verification</Text>
        <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>Enter your phone number so we can send a verification code</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.input}>
              <TextInput
                readOnly
                defaultValue='+234'
              />
              <Ionicons name="chevron-down-sharp" size={16} color="#b0b0b0" />
          </View>

          <View style={styles.inputTwo}>
              <TextInput
                keyboardType='numeric'
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)} 
              />
          </View>
        
          
          
        </View>
        
       
      </View>

      <TouchableOpacity style={[
          styles.button,
          phoneNumber.length < 10 && styles.buttonDisable, // Disable style when empty
        ]} disabled={phoneNumber.length < 10} onPress={handlePress}>
          <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: '5%'
  },

  button: {
    backgroundColor: Colors.Primary,
    padding: "5%",
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: '5%'
},

buttonDisable: {
  backgroundColor: Colors.textInputBorder
},

buttonText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 15,
    color: Colors.Secondary
},

body: {
  paddingHorizontal: 20,
  flex: 1
},

header: {
  fontFamily: Fonts.PoppinsRegular,
  fontSize: 25,
  marginTop: '8%',
  color: Colors.Secondary
},

subHeader: {
  width: '70%',
},

subHeaderText: {
  fontSize: 16,
  color: "#8a8a8a"
},

inputContainer: {
  flexDirection: 'row',
  marginTop: '8%',
  gap: '5%',
},

input: {
  width: 68,
  height: 55,
  borderColor: Colors.textInputBorder,
  borderWidth: 1,
  borderRadius: 15,
  textAlign: 'center',
  flexDirection: 'row',
  paddingHorizontal: 2,
  alignItems: 'center'
},

inputTwo: {
  flex: 1,
  height: 55,
  borderColor: Colors.textInputBorder,
  borderWidth: 1,
  borderRadius: 15,
  paddingHorizontal: 8,
  justifyContent: 'center'
},

textInput: {
  textAlign: 'center',
  fontSize: 18,
  width: '100%',
  height: '100%',
  fontFamily: Fonts.PoppinsRegular,
},


})