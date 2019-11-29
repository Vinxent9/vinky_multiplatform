import React from 'react';
import{ Text, StyleSheet, Button, Alert, View,TouchableOpacity,SafeAreaView,FlatList,ImageBackground,Image } from 'react-native';
import {Icon,Header} from 'react-native-elements';

const DATA= [
    {id:1, title: "Store", image:'home',nav:'Elm'},
    {id:1, title: "Profile", image:'person',nav:'Gli'},
  ];

const HomeScreenNu = ({navigation}) => 
{
	return(  
        <View style={styles.container}>
          <ImageBackground source={require('../assets/menubg.jpg')} style={{width: '100%', height: '100%'}} >
          <FlatList style={styles.list}
            
            contentContainerStyle={styles.listContainer}
            data={DATA}
            horizontal={false}
            numColumns={2}
            keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.nav)}>
                  <View style={styles.cardFooter}></View>
                  <Icon style={styles.cardImage} color='#FFFFFF' name={item.image} />
                  <View style={styles.cardHeader}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}/>
            </ImageBackground>
          </View>
       
	);
};

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    list: {
      paddingHorizontal: 5
    },
    listContainer:{
        paddingVertical:220,
        alignItems:'center'
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
  
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
  
      elevation: 12,
      marginVertical: 10,
      backgroundColor:"#2C2F33",
      flexBasis: '42%',
      marginHorizontal: 10,
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      alignItems:"center", 
      justifyContent:"center"
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    cardImage:{
      alignSelf:'center'
    },
    title:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#FFFFFF"
    },
  });    

export default HomeScreenNu;
