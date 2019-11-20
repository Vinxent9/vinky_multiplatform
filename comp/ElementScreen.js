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
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            
            <Text>Test Element </Text>
       
            <Card
                image={require('../assets/card_utama.jpg')}>
                <Button
                    type="outline"
                    onPress={() => navigation.navigate('Csole')}
                    icon={<Icon name='shopping-basket' color='#444444' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0}}
                    title='Check out our Console Store' 
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20}}
                />
            </Card>
            

            <Card 
                image={require('../assets/card_utama_2.jpg')}>
                <Button
                    type="outline"
                    onPress={() => navigation.navigate('Pcli')}
                    icon={<Icon name='shopping-basket' color='#444444' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0}}
                    title='Check out our PC Store' 
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20}}
                />
            </Card>

            <Card 
                image={require('../assets/card_utama_3.jpg')}>
                <Button
                    type="outline"
                    onPress={() => navigation.navigate('Csole')}
                    icon={<Icon name='shopping-basket' color='#444444' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0}}
                    title='Check out our Games' 
                    titleStyle={{fontSize:14, fontFamily: 'sans-serif-medium', paddingHorizontal: 20}}
                />
            </Card>

            <Divider style={{ backgroundColor: 'grey', height:3, marginVertical: 20 }} />

            <Text style={{fontSize:14, fontFamily: 'sans-serif-medium',justifyContent:'center'}}>Follow us on</Text>
            <SocialIcon
                title='Facebook'
                button
                type='facebook'
            />
             <SocialIcon
                title='Twitter'
                button
                type='twitter'
            />
             <SocialIcon
                title='Instagram'
                button
                type='instagram'
            />

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
	container:{ 
        flex : 1
    }
});

export default ElementScreen;