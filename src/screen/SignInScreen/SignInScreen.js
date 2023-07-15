import {
    View,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';

import Logo from '../../assets/image/Logo_1.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialMediaButton from '../../components/SocialSignInButton/SocialMediaButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

   const onSignInPressed = () => {
    console.warn('Sign In');
    navigation.navigate('HomeScreen');
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
    navigation.navigate('ForgotPassword');
  };

  const onSignUp = () => {
    console.warn('onSignUp');
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />

          <CustomInput
            placeholder="Username"
            value={userName}
            setValue={setUserName}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />

          <CustomButton text="Sign In" onPress={onSignInPressed} />
          <CustomButton
            text="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <SocialMediaButton />

        <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUp}
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
    logo: {
      width: '50%',
      maxWidth: 300,
      maxHeight: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SignInScreen;
