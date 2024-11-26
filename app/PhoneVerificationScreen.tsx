import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '@/constants/Colors';
import Fonts from '../constants/fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useRouter } from 'expo-router';

const PhoneVerificationScreen = () => {

    const [code, setCode] = useState(['', '', '', ''])
    const inputRefs = useRef([]); // Refs for the TextInput components
    const router = useRouter();


    // Handle input change and auto-focus
  const handleInputChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to the next input box if there's a value
    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace and auto-focus to the previous box
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };


  const confirmCode = () => {
    router.push('/PasswordScreen')
  }


  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Enter verification code</Text>
        <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>Enter the 4-digit code that you just received on the number provided</Text>
        </View>

        <View style={styles.inputContainer}>
        {code.map((_, index) => (
            <View key={index} style={styles.input}>
              <TextInput
                keyboardType="numeric"
                maxLength={1} // Limit to 1 character
                value={code[index]}
                onChangeText={(text) => handleInputChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={(ref) => (inputRefs.current[index] = ref)} // Assign ref to each TextInput
                autoFocus={index === 0} // Auto-focus the first input
              />
            </View>
          ))}
          
        </View>
        
       
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          code.some((char) => char === '') ? styles.buttonDisabled : null, // Disable button if code isn't complete
        ]}
        disabled={code.some((char) => char === '')} // Disable action
        onPress={() => {
            confirmCode();
            console.log('Code entered:', code.join(''))
        }} // Replace with navigation or verification logic
      >
        <Text style={styles.buttonText}>Confirm code</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default PhoneVerificationScreen;

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

buttonDisabled: {
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
  alignItems: 'center',
  justifyContent: 'center'
},

inputTwo: {
  flex: 1,
  height: 40,
  borderColor: Colors.textInputBorder,
  borderWidth: 1,
  borderRadius: 15,
  paddingHorizontal: 8
},

textInput: {
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
    height: '100%',
    fontFamily: Fonts.PoppinsRegular,
  },
})