import React from 'react';
import{ Text, StyleSheet, FlatList, View, SafeAreaView,ImageBackground,TouchableOpacity, Image } from 'react-native';
import ImageDetail from '../componentin/ImageDetail';

const ImageScreen = () =>{
    return(
          <View style={styles.container}>
               <ImageDetail 
                    title="Beach"
                    imageSource={require('../assets/beach.jpg')}
                    rating="5"
               />
               <ImageDetail 
                    title="Forest"
                    imageSource={require('../assets/forest.jpg')}
                    rating="4"
               />
               <ImageDetail 
                    title="Mountain"
                    imageSource={require('../assets/mountain.jpg')}
                    rating="3"
                    />
          </View>
    );
};

const styles = StyleSheet.create({
	container:{ 
		flex : 1 
    }
});
export default ImageScreen;