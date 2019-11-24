import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import {Header, CheckBox, Button, Card, Icon,Divider,PricingCard} from 'react-native-elements'

const star = 
[
    {
        src : require('../assets/gamestore/star1.jpg')
    },
    {
        src : require('../assets/gamestore/star2.jpg')
    },
    {
        src : require('../assets/gamestore/star3.jpg')
    }
];

const GameDetailStar = ({navigation}) => 
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
                    title="Star Wars Jedi Fallen Order Preview"
                    titleStyle={{color:'#FFFFFF'}}
                >
                        {
                            star.map((star, i) => {
                                return (
                                    <View key={i}>
                                        <Divider style={{ backgroundColor: '#99AAB5',marginVertical:20 }} />
                                        <Image
                                            source={star.src}
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
                    <Text style={{color:'#ffffff'}}>A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a new third-person action-adventure title from Respawn Entertainment. This narratively driven, single-player game puts you in the role of a Jedi Padawan who narrowly escaped the purge of Order 66 following the events of Episode 3: Revenge of the Sith. On a quest to rebuild the Jedi Order, you must pick up the pieces of your shattered past to complete your training, develop new powerful Force abilities and master the art of the iconic lightsaber - all while staying one step ahead of the Empire and its deadly Inquisitors.</Text>

                </Card>
                
                <PricingCard
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Buy Star Wars Jedi Fallen Order"
                    titleStyle={{color:'#121212'}}
                    color="#7289DA"
                    price="Rp. 850.000"
                    pricingStyle={{color:'#FFFFFF'}}
                    info={['Digital Standard Edition']}
                    infoStyle={{color:'#99AAB5'}}
                    button={{ title: 'Buy Now', icon: 'shopping-cart',backgroundColor:'#121212'}}
                />

                <PricingCard
                    containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                    title="Buy Star Wars Jedi Fallen Order Deluxe Edition"
                    titleStyle={{color:'#121212'}}
                    color="#987942"
                    price="Rp. 1.000.000"
                    pricingStyle={{color:'#FFFFFF'}}
                    info={['Deluxe Edition include : ','Cosmetic skin for BD-1','Digital art book','Directors Cut behind-the-scenes videos']}
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

export default GameDetailStar;