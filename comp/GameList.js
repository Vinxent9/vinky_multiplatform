import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, ListItem, Button, Card, Icon,SocialIcon} from 'react-native-elements'

const daftar = 
[
    {
        nama : 'Sekiro Shadow Die Twice', 
        price : 'Rp 650.000',
        src : require('../assets/gamestore/sekiro.png')
    },

    {
        nama : 'DJ Max Respect', 
        price : 'Rp 650.000',
        src : require('../assets/gamestore/respect.png')
    },

    {
        nama : 'CTR Nitro Fueled', 
        price : 'Rp 500.000',
        src : require('../assets/gamestore/ctr.png')
    },

    {
        nama : 'Dark Souls 3 Fire Fades Edition', 
        price : 'Rp 1.000.000',
        src : require('../assets/gamestore/ds3.png')
    },

    {
        nama : 'Kingdom Hearts 3', 
        price : 'Rp 700.000',
        src : require('../assets/gamestore/kh.png')
    }
];



const GameList = ({navigation}) => 
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
                    image={require('../assets/gamestore/jedi_large.jpg')}>
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
                    title="Current Deals"
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium'}}
                    image={require('../assets/gamestore/mw.jpg')}>
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

export default GameList;