import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, ListItem, Button, Card, Icon,SocialIcon} from 'react-native-elements'

const daftar = 
[
    {
        nama : 'Nintendo Switch', 
        price : 'Rp 3.500.000',
        src : require('../assets/switch_2.png')
    },

    {
        nama : 'PS4 Pro Monster Hunter Edition', 
        price : 'Rp 5.500.000',
        src : require('../assets/ps4_mh.png')
    },

    {
        nama : 'Xbox One', 
        price : 'Rp 4.500.000',
        src : require('../assets/switch_small.png')
    },

    {
        nama : 'Nintendo Switch Lite', 
        price : 'Rp 3.000.000',
        src : require('../assets/switch_small.png')
    },

    {
        nama : 'PS4 Standard', 
        price : 'Rp 4.500.000',
        src : require('../assets/switch_small.png')
    },

    {
        nama : 'PS4 Pro', 
        price : 'Rp 5.000.000',
        src : require('../assets/switch_small.png')
    }
];



const ConsoleList = ({navigation}) => 
{
    return(
        <View style={styles.container}>
            <ScrollView>
               
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                

                <Card 
                    title="New Arrival"
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium'}}
                    image={require('../assets/card_console.jpg')}>
                    <Button
                        type="outline"
                        onPress={() => navigation.navigate('Psd')}
                        iconRight
                        icon={<Icon name='arrow-forward' color='#444444' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0}}
                        title='More details' 
                        titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20}}
                    />
                 </Card>

                 <Card
                    title="Console List">
                    
                    {
                        daftar.map((daftar, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    roundAvatar
                                    title={daftar.nama}
                                    subtitle={daftar.price}
                                    leftAvatar={
                                        {source: daftar.src}
                                    }
                                    bottomDivider
                                    chevron
                                />
                            );
                        })
                    }
                </Card>
            </ScrollView>
        </View>   
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

export default ConsoleList;