import {
    View,
    Text,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  import React, { useState } from 'react';
  import CustomInput from '../../components/CustomInput/CustomInput';
  import CustomButton from '../../components/CustomButton/CustomButton';
  import SocialSignInButton from '../../components/SocialSignInButton/SocialMediaButton';

  const SignUpScreen = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
      console.warn('onRegisterPressed');
    };

    const onSignInPress = () => {
      console.warn('onSignInPress');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
    };

    return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.root}>
          <Text style={styles.title}>
            Create an account
          </Text>

          <CustomInput
            placeholder="Username"
            value={userName}
            setValue={setUserName}
          />
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />

        <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />

        <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
          />

          <CustomButton text="Register" onPress={onRegisterPressed} />
          <Text style={styles.text}>
            By registering, you confirm that you accept our{''}
            <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and{''}
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text>
          </Text>

        <SocialSignInButton />

          <CustomButton
            text="Have an acoount ? Sign In"
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
