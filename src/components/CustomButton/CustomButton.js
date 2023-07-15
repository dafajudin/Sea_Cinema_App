import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ text, onPress, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container,
      styles[`container_${type}`],
      bgColor ? { backgroundColor: bgColor } : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      padding: 15,
      borderRadius: 5,
      marginVertical: 5,
    },
    container_PRIMARY: {
      backgroundColor: 'blue',
    },
    container_SECONDARY: {
      borderColor: 'blue',
      borderWidth: 2,
    },
    container_TERTIARY: {},
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
    text_SECONDARY: {
      color: 'blue',
    },
    text_TERTIARY: {
      color: 'grey',
    },
});

export default CustomButton;
