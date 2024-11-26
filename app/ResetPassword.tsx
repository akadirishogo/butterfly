import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '@/constants/Colors';
import Fonts from '../constants/fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useRouter } from 'expo-router';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [code, setCode] = useState(['', '', '', ''])
    const inputRefs = useRef([]); // Refs for the TextInput components
    const router = useRouter();


    const isFormComplete = 
    code.every((char) => char !== '') &&
    newPassword.trim() !== '' &&        
    confirmPassword.trim() !== '' && 
    newPassword === confirmPassword;  

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
    router.push('/DashBoard')
  }

  const resendCode = () => {
    router.push('/ForgotPasswordScreen')
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <Text style={styles.header}>Verification code sent</Text>
        <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>
                We have sent a 4-digit  verification code to your email,  
                check your email for details
            </Text>
            <Text style={styles.subHeaderTextTwo}>
                Enter the 4-digit code
            </Text>
        </View>

        <View>
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

            <View style={styles.inputTextContainer}>
                <TextInput 
                    style={styles.inputText}
                    secureTextEntry={!showPassword}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                <Text style={{fontFamily: Fonts.PoppinsLight}}>Enter New Password</Text>

                <TextInput 
                    style={styles.inputTwoText}
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <Text style={{fontFamily: Fonts.PoppinsLight}}>Confirm New Password</Text>
                <Text style={{fontFamily: Fonts.PoppinsLight, color: Colors.greySubText}}>Both passwords must match!</Text>
            </View>  
        </View>
        <TouchableOpacity
        style={[
          styles.button,
          !isFormComplete  ? styles.buttonDisabled : null, // Disable button if code isn't complete
        ]}
        disabled={!isFormComplete} // Disable action
        onPress={() => {
            confirmCode();
            console.log('Code entered:', code.join(''))
        }} // Replace with navigation or verification logic
      >
        <Text style={styles.buttonText}>Reset password</Text>
      </TouchableOpacity>
       <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '3%'}}>
            <Text style={{color: Colors.greySubText, textAlign: 'center'}}>Did not receive email? </Text>
            <TouchableOpacity onPress={resendCode}><Text style={{color: Colors.darkGreen}}>Resend code</Text></TouchableOpacity>
       </View>
       
      </ScrollView>  
    </View>
  )
}

export default ResetPassword;

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
    marginHorizontal: '5%',
    marginTop: '25%'
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
  width: '95%',
},

subHeaderText: {
  fontSize: 16,
  color: "#8a8a8a"
},

subHeaderTextTwo: {
    fontSize: 16,
    color: "#8a8a8a",
    marginTop: '10%',
    marginBottom: '3%'
  },

inputContainer: {
  flexDirection: 'row',
  marginTop: '3%',
  gap: '5%',
},

input: {
  width: 68,
  height: 40,
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

  inputText: {
    borderBottomWidth: 1,
    borderColor: Colors.textInputBorder, 
    fontFamily: Fonts.PoppinsLight
 },

 inputTwoText: {
    borderBottomWidth: 1,
    borderColor: Colors.textInputBorder,
    marginTop: '3%',
    fontFamily: Fonts.PoppinsLight 
 },

  inputTextContainer: {
    marginTop: '3%',
  }
})