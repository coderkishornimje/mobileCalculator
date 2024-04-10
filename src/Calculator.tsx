import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import CalculatorButton from './CustomButton';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState(0);

  const handleButtonPress = (button: string) => {
   if (button === '=') {
      calculateResult();
    } else if (button === 'C' || button === 'AC') {
      clearInput();
    } else if (button === 'm+') {
      addToMemory();
    } else if (button === 'm-') {
      subtractFromMemory();
    } else if (button === '.') {
      addDecimalPoint();
    } else {
      setInput(prevInput => prevInput + button);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };
  const addToMemory = () => {
    setMemory(prevMemory => prevMemory + parseFloat(input));
  };

  const subtractFromMemory = () => {
    setMemory(prevMemory => prevMemory - parseFloat(input));
  };
  const addDecimalPoint = () => {
    if (input.indexOf('.') === -1) {
      setInput(prevInput => prevInput + '.');
    }
  };

  const handleKeyPress = (key: string) => {
    if (!isNaN(parseInt(key, 10)) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '=') {
      handleButtonPress(key);
    } else if (key === 'Backspace') {
      setInput(prevInput => prevInput.slice(0, -1));
    }
  };

  const buttons = [
    ['9', '8', '7', 'C', 'AC'],
    ['6', '5', '4', '*', '%'],
    ['3', '2', '1', '+', '='],
    ['0', '.', 'm+', '-', 'm-'],
  ];

  const renderButtons = (buttons: any[]) => {
    return buttons.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.buttonRow}>
        {row.map((button: string, index: any) => (
          <CalculatorButton
            key={index}
            onPress={() => handleButtonPress(button)}
            text={button}
            style={
              (button === 'AC' || button === 'm+' || button === 'C' || button === 'm-') && { backgroundColor: '#ff9800' }
            }
          />
        ))}
      </View>
    ));
  };

  return (
     <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* <Text style={styles.input}>{input}</Text> */}
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key)}
          keyboardType="numeric"
        />
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>{renderButtons(buttons)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      inputContainer: {
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        marginBottom: 20,
      },
      input: {
        fontSize: 30,
        marginBottom: 10,
      },
      result: {
        fontSize: 24,
        color: 'gray',
      },
      buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonRow: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 60,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 20,
      },
});
