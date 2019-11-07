import React from 'react';
import{ Text, StyleSheet } from 'react-native';

const Comp = () => 
{
	return <Text style={styles.textStyle}>This is comp screen</Text>;
};

const styles = StyleSheet.create({
	textStyle:{
		fontSize:26,
		color: 'red'
	}
});

export default Comp;
