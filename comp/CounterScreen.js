import React from 'react'
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements'

const CounterScreen = () => {
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Text>CounterScreen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
	container:{ 
		flex : 1 
    }
});

export default CounterScreen;