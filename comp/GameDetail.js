import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, CheckBox, Button, Card, Icon,Divider,PricingCard} from 'react-native-elements'

const sekiro = 
[
    {
        src : require('../assets/gamestore/sekiro1sm.jpg')
    },
    {
        src : require('../assets/gamestore/sekiro2sm.jpg')
    },
    {
        src : require('../assets/gamestore/sekiro3sm.jpg')
    }
];

const GameDetail = ({navigation}) => 
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
                    title="Sekiro Shadows Die Twice Preview"
                    titleStyle={{color:'#FFFFFF'}}
                >
                        {
                            sekiro.map((sekiro, i) => {
                                return (
                                    <View key={i}>
                                        <Divider style={{ backgroundColor: 'white',marginVertical:20 }} />
                                        <Image
                                            source={sekiro.src}
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
                    <Text style={{color:'#ffffff'}}>In Sekiro: Shadows Die Twice you are the "one-armed wolf", a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself.</Text>

                </Card>
                
                <PricingCard
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Buy Sekiro Shadows Die Twice"
                    titleStyle={{color:'#121212'}}
                    color="#7289DA"
                    price="Rp. 650.000"
                    pricingStyle={{color:'#FFFFFF'}}
                    info={['Digital Standard Edition']}
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

export default GameDetail;