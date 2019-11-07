import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,TouchableOpacity, Image} from 'react-native';

const daftar = 
[
    {
        nama : 'PS4', 
        desc : 'The PlayStation 4 is an eighth-generation home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 in February 2013',
        src : require('../assets/ps4_small.png')
    },

    {
        nama : 'Xbox One', 
        desc : 'The Xbox One is an eighth-generation home video game console developed by Microsoft. Announced in May 2013, it is the successor to Xbox 360 and the third console in the Xbox Family',
        src : require('../assets/xbox_small.png')
    },

    {
        nama : 'Nintendo Switch', 
        desc : 'The Nintendo Switch is a video game console developed by Nintendo, released on March 3, 2017. It is a hybrid console that can be used as a stationary and portable device',
        src : require('../assets/switch_small.png')
    }
];



const ConsoleList = () => 
{
    return(
        <SafeAreaView style={styles.contain}>
            <ImageBackground source={require('../assets/app_background_2.jpg')} style={{width: '100%', height: '100%'}}>
                <FlatList
                    data={daftar}
                    renderItem={({ item }) => 
                        <View>
                            <Image
                                source={item.src}
                            />
                            <TouchableOpacity
                                onPress={() => {}}
                                style={[
                                    styles.buttonStyle,
                                    {backgroundColor: "#3BBA9C"}
                                ]}
                            >
                            <Text  style={styles.textStyle}>
                                {item.nama}
                            </Text>
                            <Text  style={styles.descStyle}>
                                {item.desc}
                            </Text>
                            </TouchableOpacity>
                         
                        </View>
                    }
                />
            </ImageBackground> 
        </SafeAreaView>   
    );
};

const styles = StyleSheet.create({
    contain : {
        flex : 1
    },
    textStyle : {
        fontSize :18,
        color : "#FFFFFF",
        textAlign : 'center'
    },
    descStyle : {
      fontSize :  14,
      color : "#FFFFFF", 
      textAlign : 'center',
      paddingHorizontal : 10,
      paddingVertical : 10
    },
    buttonStyle:{
        marginVertical : 10,
        marginHorizontal : 30
    },
    imgStyle:{
        paddingHorizontal : 10
        //flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
        //height: '100%'
    },
});

export default ConsoleList;