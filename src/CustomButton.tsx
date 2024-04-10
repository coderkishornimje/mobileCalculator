//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const CalculatorButton = ({ onPress, text, style }:any) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
  

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 60,
        paddingVertical: 18,
        paddingHorizontal: 12,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginHorizontal:10,
      },
      buttonText: {
        fontSize: 25,
      },
});

//make this component available to the app
export default CalculatorButton;
