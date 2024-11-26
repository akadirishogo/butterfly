import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Fonts from '../constants/fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

const handlePress = () => {
  router.push('/(authenticated)/(tabs)/Home')
}

const forgotPassword = () => {
    router.push('/ForgotPasswordScreen')
}

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Welcome, Winner</Text>
        <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>Enter your correct password</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputTwo}>
              <TextInput
                style={{flex: 1}}
                placeholder='Enter password...'
                secureTextEntry={!showPassword}
                keyboardType='default'
                value={password}
                onChangeText={setPassword} 
              />

            <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{marginLeft: '-9%'}} // Toggle visibility
            >
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#b0b0b0"/>
            </TouchableOpacity>
          </View>  
        </View>
        
       
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonTwo} onPress={forgotPassword}>
          <Text style={styles.buttonText}>Forgot password</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default PasswordScreen;

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

buttonTwo: {
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginTop: '5%'
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
    marginTop: '6%',
    width: '70%',
},

subHeaderText: {
  fontSize: 16,
  color: "#8a8a8a"
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
  alignItems: 'center'
},

inputTwo: {
  flex: 1,
  height: 55,
  borderColor: Colors.textInputBorder,
  borderWidth: 1,
  borderRadius: 15,
  paddingHorizontal: 8,
  flexDirection: 'row',
  alignItems: 'center'
},

textInput: {
  textAlign: 'center',
  fontSize: 18,
  width: '100%',
  height: '100%',
  fontFamily: Fonts.PoppinsRegular,
},


})