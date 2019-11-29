import React from 'react'
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ScrollView,TouchableOpacity, Image} from 'react-native';
import {Header, Card, Button, Divider, Icon, PricingCard,SocialIcon} from 'react-native-elements'

const daftar = 
[
    {
        nama : 'Console',
        icon : 'octoface',
        src : require('../assets/card_utama.jpg')
    },

    {
        nama : 'PC Peripheral',
        icon : 'setting_input_hdmi',
        src : require('../assets/card_utama_2.jpg')
    },

    {
        nama : 'Games',
        icon : 'setting_input_hdmi'
    }
];


const ElementScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Header
                
                backgroundColor='#2C2F33'
                leftComponent={{ text: 'ALPATECH' , style: { color: '#fff',fontFamily:'sans-serif-condensed' }}}
                centerComponent={{text: 'Store Menu' , style: { color: '#fff'}}}
                rightComponent={{ icon: 'home', color: '#fff',onPress: () => navigation.navigate('Homenu') }}
            />
            
       
            <Card
                containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                image={require('../assets/card_utama.jpg')}>
                <Button
                    type="solid"
                    onPress={() => navigation.navigate('Csole')}
                    icon={<Icon name='shopping-basket' color='#121212' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0, backgroundColor:'#FFFFFF'}}
                    title='Check out our Console Store' 
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20,color:'#121212'}}
                />
            </Card>
            

            <Card 
                containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                image={require('../assets/card_utama_2.jpg')}>
                <Button
                    type="solid"
                    onPress={() => navigation.navigate('Pcli')}
                    icon={<Icon name='shopping-basket' color='#121212' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0, backgroundColor:'#FFFFFF'}}
                    title='Check out our PC Store' 
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20,color:'#121212'}}
                />
            </Card>

            <Card 
                containerStyle={{backgroundColor:'#2C2F33', borderColor:'transparent'}}
                image={require('../assets/card_utama_3.jpg')}>
                <Button
                    type="solid"
                    onPress={() => navigation.navigate('Gli')}
                    icon={<Icon name='shopping-basket' color='#121212' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0, backgroundColor:'#FFFFFF'}}
                    title='Check out our Games' 
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20,color:'#121212'}}
                />
            </Card>


            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
	container:{ 
        flex : 1,
        backgroundColor : '#121212'
    }
});

export default ElementScreen;