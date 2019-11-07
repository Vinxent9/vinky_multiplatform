import React from 'react';
import{ Text, StyleSheet, FlatList, View } from 'react-native';

const daftar = 
[
    {nama : 'PS4'},
    {nama : 'Xbox'},
    {nama : 'Switch'}
];

const ConsoleList = () => 
{
    return(
        <FlatList
            data={daftar}
            renderItem={({ item }) => 
                <View>
                    <Text>
                        {item.nama}
                    </Text>
                </View>
            }
        />    
    );
};

export default ConsoleList;