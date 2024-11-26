import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import * as Font from 'expo-font';
import { Colors } from "@/constants/Colors";


export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
        await Font.loadAsync({
            'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
            'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
            'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
            'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
            'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf')
        });
        setFontsLoaded(true);
    }
    loadFonts();
}, []);



  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/images/logoIcon.png')}/>
      </View>
    );
  }


  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='SignInScreen' options={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.Primary,
        },
        headerTitle: () => (
          <Image source={require('../assets/images/headerLogoBlack.png')}
          style={{marginLeft: -18}}
          />
        )
      }}
      />

<Stack.Screen name='PhoneVerificationScreen' options={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.Primary,
        },
        headerTitle: () => (
          <Image source={require('../assets/images/headerLogoBlack.png')}
          style={{marginLeft: -18}}
          />
        )
      }}
      />

<Stack.Screen name='PasswordScreen' options={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.Primary,
        },
        headerTitle: () => (
          <Image source={require('../assets/images/headerLogoBlack.png')}
          style={{marginLeft: -18}}
          />
        )
      }}
      />

<Stack.Screen name='ForgotPasswordScreen' options={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.Primary,
        },
        headerTitle: () => (
          <Image source={require('../assets/images/headerLogoBlack.png')}
          style={{marginLeft: -18}}
          />
        )
      }}
      />

<Stack.Screen name='ResetPassword' options={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.Primary,
        },
        headerTitle: () => (
          <Image source={require('../assets/images/headerLogoBlack.png')}
          style={{marginLeft: -18}}
          />
        )
      }}
      />

<Stack.Screen name='SignUpScreen' options={{
        headerShadowVisible: false,
        headerStyle: {
          
        },
        headerTitle: ''
      }}
      />

<Stack.Screen name='(authenticated)/(tabs)' options={{ headerShown: false }} />
    </Stack>
  ) 
}
