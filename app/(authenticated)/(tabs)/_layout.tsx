import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import Header from '@/components/Dashboard/Header/Header';
import { Colors } from '@/constants/Colors';

const _layout = () => {
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor: Colors.darkGreen, 
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 60,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45
    }
   }}>
    <Tabs.Screen 
                name='Home'
                options={{ 
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={24} color={color} />
                    ),
                    header: () =>  <Header />,
                }}
            />

        <Tabs.Screen 
                name='Assets'
                options={{ 
                    title: 'Assets',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="folder" size={24} color={color} />
                        
                    ),
                    header: () =>  <Header />,
                }}
            />

        <Tabs.Screen 
                name='Trade'
                options={{ 
                    title: 'Trade',
                    tabBarIcon: ({ color }) => (
                        <Foundation name="graph-trend" size={24} color={color} />
                        
                    ),
                    header: () =>  <Header />,
                }}
            />

        <Tabs.Screen 
                name='Accounts'
                options={{ 
                    title: 'Accounts',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="account-circle" size={24} color={color} />  
                         ),
                    header: () =>  <Header />,
                }}
            />

   </Tabs>
  )
}

export default _layout