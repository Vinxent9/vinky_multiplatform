import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, ListItem, Button, Card, Icon,SocialIcon} from 'react-native-elements'

const daftar = 
[
    {
        nama : 'Intel I7 9th Generation 3.0 Ghz Processor', 
        price : 'Rp 3.500.000',
        src : require('../assets/pc_asset/intel.png')
    },

    {
        nama : 'AMD Ryzen 7', 
        price : 'Rp 2.500.000',
        src : require('../assets/pc_asset/ryzen.png')
    },

    {
        nama : 'Wacom Intous', 
        price : 'Rp 1.200.000',
        src : require('../assets/pc_asset/wacom.png')
    },

    {
        nama : 'Razer Blackwidow Ultimate Keyboard', 
        price : 'Rp 3.000.000',
        src : require('../assets/pc_asset/blackwidow.png')
    }
];



const PcList = ({navigation}) => 
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
                    image={require('../assets/pc_asset/card_pc.jpg')}>
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

export default PcList;