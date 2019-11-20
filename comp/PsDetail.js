import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView, Image} from 'react-native';
import {Header,Icon, Avatar,Tile,Divider,Card,Button} from 'react-native-elements'

const strand = 
[
    {
        src : require('../assets/ps4_stranding_2.jpg')
    },
    {
        src : require('../assets/ps4_stranding_large.jpg')
    },
];

const PsDetails = ({navigation}) => 
{
    return(
        <SafeAreaView styles={styles.container}>
            <ScrollView>    
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                
                <Card title="PS4 Pro Death Stranding Preview">
                    {
                        strand.map((strand, i) => {
                            return (
                                <View key={i}>
                                    <Image
                                    style={{width:300,height:200}}
                                    source={strand.src}
                                    />
                                </View>
                            );
                            })
                        }
                </Card>
                
                <Card 
                    title='HELLO WORLD'
                    image={require('../assets/card_console.jpg')}>
                    <Text style={{marginBottom: 10}}>
                        The LIMITED EDITION DEATH STRANDING PS4™ PRO BUNDLE includes a custom 1TB PS4™Pro system and a custom DUALSHOCK®4 wireless controller inspired by the game, and DEATH STRANDING on Blu-ray Disc.
                    </Text>
                    <Text style={{fontSize:14, fontStyle:'italic',fontFamily: 'sans-serif-medium',paddingVertical:20}}>
                        Price : Rp 6.500.000
                    </Text>
                    <Button
                        type="outline"
                        onPress={() => navigation.navigate('Psd')}
                        iconRight
                        icon={<Icon name='shopping-basket' color='#444444' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0}}
                        title='Buy Now' 
                        titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20}}
                    />
                 </Card>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
	container:{ 
        flex : 1
    }
});

export default PsDetails;