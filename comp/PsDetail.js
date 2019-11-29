import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, CheckBox, Button, Card, Icon,Divider,PricingCard} from 'react-native-elements'

const strand = 
[
    {
        src : require('../assets/strand1.jpg')
    },
    {
        src : require('../assets/strand2.jpg')
    },
    {
        src : require('../assets/strand3.jpg')
    }
];

const NviDetail = ({navigation}) => 
{
    return(
        <View style={styles.container}>
            <ScrollView>
                <Header
                    backgroundColor='#2C2F33'
                    leftComponent={{ text: 'ALPATECH' , style: { color: '#fff',fontFamily:'sans-serif-condensed' }}}
                    centerComponent={{text: 'Console Store' , style: { color: '#fff'}}}
                    rightComponent={{ icon: 'home', color: '#fff',onPress: () => navigation.navigate('Homenu') }}
                />

                <Card 
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="PS4 Pro Death Stranding Edition Preview"
                    titleStyle={{color:'#FFFFFF'}}
                >
                        {
                            strand.map((strand, i) => {
                                return (
                                    <View key={i}>
                                        <Divider style={{ backgroundColor: '#99AAB5',marginVertical:20 }} />
                                        <Image
                                            source={strand.src}
                                        />
                                        
                                    </View>
                                );
                                })
                            }
                </Card>

                <Card 
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="About This Game"
                    titleStyle={{color:'#FFFFFF'}}
                >
                    <Text style={{color:'#ffffff'}}>The LIMITED EDITION DEATH STRANDING PS4™ PRO BUNDLE includes a custom 1TB PS4™Pro system and a custom DUALSHOCK®4 wireless controller inspired by the game, and DEATH STRANDING on Blu-ray Disc.</Text>

                </Card>
                
                <PricingCard
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Buy PS4 Pro Death Stranding Edition"
                    titleStyle={{color:'#121212'}}
                    color="#7289DA"
                    price="Rp. 5.000.000"
                    pricingStyle={{color:'#FFFFFF'}}
                    info={['This Package Include : ','Death Stranding Blu-ray Disc','PS4 Pro 1TB','Digital Content']}
                    infoStyle={{color:'#99AAB5'}}
                    button={{ title: 'Buy Now', icon: 'shopping-cart',backgroundColor:'#121212'}}
                />



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

export default NviDetail;