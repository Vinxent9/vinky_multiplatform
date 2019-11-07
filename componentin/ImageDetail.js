import React from 'react';
import{ Text, View, Image, ImageBackground} from 'react-native';


const ImageDetail = ({ imageSource, title, rating}) => {
    return (
        <View style={{ padding: 10}}>
            <Image 
                source={imageSource}
            />
            <Text> {title} </Text>
            <Text> Rating: {rating} stars </Text>
        </View>
    )
};

export default ImageDetail;