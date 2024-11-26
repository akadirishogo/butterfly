import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Fonts from '../constants/fonts';
import Swiper from 'react-native-swiper'
import { useRouter } from 'expo-router';


const slides = [
    {
        image: require('../assets/images/slideImage1.png'),
        descriptionHead: 'Decentralized Finance',
        descriptionSub: 'Empower your financial freedom with decentralized technologies that remove middlemen and put you in control.'
    },
    {
        image: require('../assets/images/slideImage2.png'),
        descriptionHead: 'Secure Transactions',
        descriptionSub: 'Experience unparalleled security with blockchain encryption and transparency.'
    },
    {
        image: require('../assets/images/slideImage3.png'),
        descriptionHead: 'Global Accessibility',
        descriptionSub: 'Cryptocurrency connects users worldwide, enabling cross-border transactions with no delays or high fees'
    },
];

const HomeScreen = () => {
    const router = useRouter();


const handlePress = () => {
    router.push('/SignInScreen')
}
 
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/images/headerLogoBlack.png')} />
        </View>

        <View style={styles.wrapper}>
        <Swiper
                autoplay
                autoplayTimeout={3} // 2 seconds per slide
                showsPagination
                loop
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                
            >
                {slides.map((slide, index) => (
                    <View style={styles.slide} key={index}>
                        <Image source={slide.image} style={styles.image} />
                        <Text style={styles.headerText}>{slide.descriptionHead}</Text>
                        <Text style={styles.subText}>{slide.descriptionSub}</Text>
                    </View>
                ))}
                    
            </Swiper>
            
            </View>
        
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </View>

      
  )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: '10%',
        paddingHorizontal: '5%',
    },

    header: {
        minWidth: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: Colors.Primary,
        padding: "5%",
        borderRadius: 30,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonText: {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 15
    },

    image: {
        width: '70%',
        height: '50%'
    },

    activeDot: {
        backgroundColor: Colors.darkGreen,
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
    },
    dot: {
        backgroundColor: '#ccc',
        width: 6,
        height: 6,
        borderRadius: 5,
        margin: 5,
    },

    wrapper: {
        height: '80%',
        marginTop: '5%',
    },

  

    headerText: {
        fontSize: 35,
        fontFamily: Fonts.PoppinsSemi,
        color: Colors.Secondary,
        textAlign: 'center'
    },
    subText: {
        fontSize: 15,
        fontFamily: Fonts.PoppinsLight,
        textAlign: 'center',
        color: Colors.Secondary
    },

    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    }
   
})