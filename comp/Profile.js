import React from 'react';
import{ Text, StyleSheet, Button, Alert, View,TouchableOpacity,SafeAreaView,FlatList,ImageBackground,Image } from 'react-native';
import {Icon,Header,SocialIcon} from 'react-native-elements';

const Profile = ({navigation}) => 
{
	return(  
        <View style={styles.container}>
            <Header
                    backgroundColor='#2C2F33'
                    leftComponent={{ text: 'ALPATECH' , style: { color: '#fff',fontFamily:'sans-serif-condensed' }}}
                    centerComponent={{text: 'Developer Profile' , style: { color: '#fff'}}}
                    rightComponent={{ icon: 'home', color: '#fff',onPress: () => navigation.navigate('Homenu') }}
            />
          <View style={styles.header}>
            <Image  style={{width:500,height:200}} source={require('../assets/hp2.jpg')}/>

          </View>
          <Image style={styles.avatar} source={require('../assets/glory_2.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Vincentius Vinky</Text>
              <Text style={styles.info}>Graphic Designer / Programmer</Text>  
              <Text style={styles.description}>Business and branding graphic designer. Currently learning : Unity, Pixel Art, React Native</Text>
              <Text style={styles.description}>Follow my social media : </Text>
              <SocialIcon
                type='facebook'
              />
             
            </View>
        </View>
      </View>
	);
};

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#3BBA9C",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:190
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#7289DA",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center',
      
    }
  });

export default Profile;