import React from 'react';
import{ Text, StyleSheet, Button, Alert, View,ImageBackground,SafeAreaView } from 'react-native';

function Separator()
{
    return <View style={styles.separator} />
}

const HomeScreen = ({navigation}) => 
{
	return(
        <SafeAreaView>
            <ImageBackground source={require('../assets/app_background_2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.buttonStyle}>
                <Button
                    title="Current Gen Console"
                    color="#707793"
                    onPress={() => navigation.navigate('Csole')}
                />
                <Separator />
                <Button 
                    title="Image Screen"
                    color="#707793"
                    onPress={() => navigation.navigate('Img')}
                />
                <Separator />
                <Button 
                    title="Counter Screen"
                    color="#707793"
                    onPress={() => navigation.navigate('Ctr')}
                />
                 <Button 
                    title="React Element"
                    color="#707793"
                    onPress={() => navigation.navigate('Elm')}
                />
                </View>
            </ImageBackground>
        </SafeAreaView>
	);
};

const styles = StyleSheet.create({
	textStyle:{ 
		fontSize:26,
		color: 'red'
    },
    buttonStyle:{
        marginVertical : 100,
        marginHorizontal : 50
    },
    separator: {
        marginVertical: 12,
        //borderBottomColor: '#737373',
        //borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default HomeScreen;
