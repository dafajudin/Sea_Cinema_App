import {
    View,
    Text,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  import React, { useState } from 'react';
  import CustomInput from '../../components/CustomInput/CustomInput';
  import CustomButton from '../../components/CustomButton/CustomButton';

  const SignUpScreen = () => {

    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
      console.warn('onConfirmPressed');
    };

    const onSignInPress = () => {
      console.warn('onSignInPress');
    };

    const onResenCodePress = () => {
        console.warn('onResenCodePress');
    };

    return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.root}>
          <Text style={styles.title}>
            Confirm your Email
          </Text>

            <CustomInput
                placeholder="Enter your confirmation code"
                value={code}
                setValue={setCode}
            />

          <CustomButton
            text="Confirm"
            onPress={onConfirmPressed}
          />

            <CustomButton
            text="Resend Code"
            onPress={onResenCodePress}
            type="SECONDARY"
          />

          <CustomButton
            text="Back to Sign In"
            onPress={onSignInPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
    },
    root: {
      alignItems: 'center',
      padding: 20,
      margin: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'#051C60',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#FDB075',
    },
  });

export default SignUpScreen;
