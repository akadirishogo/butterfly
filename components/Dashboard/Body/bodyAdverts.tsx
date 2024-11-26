import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import Fonts from '@/constants/fonts'
import { Colors } from '@/constants/Colors';


const { width, height } = Dimensions.get('window');


const BodyAdvert = () => {
  return (
    <ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{ padding: 10 }} 
    style={styles.bigCardContainer}>
            <View style={styles.bigCardActive}>
                <View style={styles.cardHeader}>
                    <FontAwesome5 name="fire" size={24} color="black" style={{flex: 1}} />
                    <View style={{backgroundColor: '#fff', padding: 4, borderRadius: 10, width: 40, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 10, fontFamily: Fonts.PoppinsMedium}}>New</Text>
                    </View>
                </View>
                <View style={styles.cardBody}>
                    <Text style={{fontFamily: Fonts.PoppinsMedium}}>Cash ISA</Text>
                    <Text style={styles.headLine}>5.17% AER</Text>
                    <Text style={{fontFamily: Fonts.PoppinsLight}}>Tax-Free Savings</Text>
                </View>    
            </View>
            <View style={styles.bigCard}>
                <View style={styles.cardHeader}>
                    <FontAwesome5 name="fire" size={24} color="black" style={{flex: 1}} />
                    <View style={{backgroundColor: '#fff', padding: 4, borderRadius: 10, width: 40, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 10, fontFamily: Fonts.PoppinsMedium}}>New</Text>
                    </View>
                </View>
                <View style={styles.cardBody}>
                    <Text style={{fontFamily: Fonts.PoppinsMedium}}>Plum Interest</Text>
                    <Text style={styles.headLine}>8.11%</Text>
                    <Text style={{fontFamily: Fonts.PoppinsLight}}>Variable Annual rate</Text>
                </View>    
            </View>
            <View style={styles.bigCard}>
                <View style={styles.cardHeader}>
                    <FontAwesome5 name="fire" size={24} color="black" style={{flex: 1}} />
                    <View style={{backgroundColor: '#fff', padding: 4, borderRadius: 10, width: 40, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 10, fontFamily: Fonts.PoppinsMedium}}>New</Text>
                    </View>
                </View>
                <View style={styles.cardBody}>
                    <Text style={{fontFamily: Fonts.PoppinsMedium}}>Plum Interest</Text>
                    <Text style={styles.headLine}>8.11%</Text>
                    <Text style={{fontFamily: Fonts.PoppinsLight}}>Variable Annual rate</Text>
                </View>    
            </View>
        </ScrollView>
  )
}

export default BodyAdvert

const styles = StyleSheet.create({
    bigCardContainer: {
        height: height * 0.25,
    },

    bigCard: {
        height: '100%',
        width: width*0.50,
        marginRight: 20,
        borderRadius: 21,
        elevation: 3,
        padding: 15,
    },

    bigCardActive: {
        backgroundColor: Colors.Primary,
        height: '100%',
        width: width*0.50,
        marginRight: 20,
        borderRadius: 21,
        elevation:  3,
        padding: 15,
    },

    cardHeader: {
        flexDirection: 'row',
        flex: 1
    },

    cardBody: {
        //backgroundColor: 'red',
        width: '100%',
        height: 70,
        justifyContent: 'center'
    },

    headLine: {
        fontSize: 20,
        fontFamily: Fonts.PoppinsSemi,
        marginBottom: -5
    },

})