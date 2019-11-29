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
                   backgroundColor='#2C2F33'
                   leftComponent={{ text: 'ALPATECH' , style: { color: '#fff',fontFamily:'sans-serif-condensed' }}}
                   centerComponent={{text: 'PC Store' , style: { color: '#fff'}}}
                   rightComponent={{ icon: 'home', color: '#fff',onPress: () => navigation.navigate('Homenu') }}
                />
                

                <Card 
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="New Arrival"
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium',color:'#FFFFFF'}}
                    image={require('../assets/pc_asset/card_pc.jpg')}>
                    <Button
                        type="solid"
                        onPress={() => navigation.navigate('Nvi')}
                        iconRight
                        icon={<Icon name='arrow-forward' color='#121212' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0,backgroundColor:'#FFFFFF'}}
                        title='More details' 
                        titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20,color:'#121212'}}
                    />
                 </Card>

                 <Card
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Hardware List"
                    titleStyle={{color:'#FFFFFF'}}
                    >
                    
                    {
                        daftar.map((daftar, i) => {
                            return (
                                <ListItem
                                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'#FFFFFF'}}
                                    key={i}
                                    roundAvatar
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

export default PcList;