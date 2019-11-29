import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, CheckBox, Button, Card, Icon,Divider,PricingCard} from 'react-native-elements'

const rtx = 
[
    {
        src : require('../assets/pc_asset/rtx.jpg')
    },
    {
        src : require('../assets/pc_asset/rtx2.jpg')
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
                   centerComponent={{text: 'PC Store' , style: { color: '#fff'}}}
                   rightComponent={{ icon: 'home', color: '#fff',onPress: () => navigation.navigate('Homenu') }}
                />

                <Card 
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="NVIDIA GeForce RTX 2080 TI Preview"
                    titleStyle={{color:'#FFFFFF'}}
                >
                        {
                            rtx.map((rtx, i) => {
                                return (
                                    <View key={i}>
                                        <Divider style={{ backgroundColor: '#99AAB5',marginVertical:20 }} />
                                        <Image
                                            source={rtx.src}
                                        />
                                        
                                    </View>
                                );
                                })
                            }
                </Card>

                <Card 
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="About Nvidia RTX"
                    titleStyle={{color:'#FFFFFF'}}
                >
                    <Text style={{color:'#ffffff'}}>NVIDIA’s newest flagship graphics card is a revolution in gaming realism and performance. Its powerful NVIDIA Turing™ GPU architecture, breakthrough technologies, and 11 GB of next-gen, ultra-fast GDDR6 memory make it the world’s ultimate gaming GPU. GeForce RTX™ graphics cards are powered by the Turing GPU architecture and the all-new RTX platform. This gives you up to 6X the performance of previous-generation graphics cards and brings the power of real-time ray tracing and AI to games. </Text>

                </Card>
                
                <PricingCard
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Buy Nvidia GeForce RTX 2080 TI"
                    titleStyle={{color:'#121212'}}
                    color="#7289DA"
                    price="$ 1.199"
                    pricingStyle={{color:'#FFFFFF'}}
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