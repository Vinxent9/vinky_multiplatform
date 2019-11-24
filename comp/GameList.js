import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, ListItem, Button, Card, Icon,SocialIcon} from 'react-native-elements'
import Video from 'react-native-video'

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
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Coming Soon"
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium',color:'#FFFFFF'}}
                    image={require('../assets/gamestore/sf.jpg')}>
                 </Card>

                <Card 
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="New Arrival"
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium',color:'#FFFFFF'}}
                    image={require('../assets/gamestore/jedi_large.jpg')}>
                    <Button
                        type="solid"
                        onPress={() => navigation.navigate('Gst')}
                        iconRight
                        icon={<Icon name='arrow-forward' color='#121212' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0,backgroundColor:'#FFFFFF'}}
                        title='More details' 
                        titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20,color:'#121212'}}
                    />
                 </Card>

                 <Card 
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Current Deals"
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium',color:'#FFFFFF'}}
                    image={require('../assets/gamestore/mw.jpg')}>
                    <Button
                        type="outline"
                        onPress={() => navigation.navigate('Psd')}
                        iconRight
                        icon={<Icon name='arrow-forward' color='#121212' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0,backgroundColor:'#FFFFFF'}}
                        title='More details' 
                        titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20,color:'#121212'}}
                    />
                 </Card>

                 <Card
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Game List"
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium',color:'#FFFFFF'}}
                    >
                    
                    {
                        daftar.map((daftar, i) => {
                            return (
                                <ListItem
                                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'white'}}
                                    key={i}
                                    roundAvatar
                                    onPress={() => navigation.navigate('Gdt')}
                                    title={daftar.nama}
                                    titleStyle={{color:'#FFFFFF'}}
                                    subtitle={daftar.price}
                                    subtitleStyle={{color:'#99AAB5'}}
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
        flex : 1,
        backgroundColor:'#121212'
    }
});

export default GameList;