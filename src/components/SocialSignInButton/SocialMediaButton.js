import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButton = () => {
    const onSignInWithFacebook = () => {
        console.warn('onSignInWithFacebook');
      };

      const onSignInWithGoogle = () => {
        console.warn('onSignInWithGoogle');
      };

      const onSignInWithApple = () => {
        console.warn('onSignInWithApple');
      };
  return (
    <>
        <CustomButton
            text="Sign In with Facebook"
            onPress={onSignInWithFacebook}
            bgColor={'#E7EAF4'}
            fgColor={'#4765A9'}
          />
  
          <CustomButton
            text="Sign In with Google"
            onPress={onSignInWithGoogle}
            bgColor={'#FAE9EA'}
            fgColor={'#DD4D44'}
          />

          <CustomButton
            text="Sign In with Apple"
            onPress={onSignInWithApple}
            bgColor={'#e3e3e3e3'}
            fgColor={'#363636'}
          />
    </>
  );
};
export default SocialSignInButton;
