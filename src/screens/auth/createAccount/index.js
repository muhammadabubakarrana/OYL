import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {
  Logos,
  Toasts,
  Icons,
  Text,
  TextInputs,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  CheckBoxes,
  CustomInput,
} from '../../../components';
import {
  appStyles,
  colors,
  responsiveFontSize,
  responsiveHeight,
  routes,
  appSvgs,
  responsiveWidth,
  sizes,
  appImages,
} from '../../../services';
import {useHooks} from './hooks';
import {Icon} from '@rneui/base';
export default function Index(props) {
  // const { navigate } = props.navigation

  const {accepted, setAccepted, showPassword, setShowPassword} = useHooks();
  return (
    <Wrapper isImageBackground source={appImages.background_1} style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          //  backIconSize={responsiveFontSize(30)}
          showBackArrow
          invertColors
          title={'Create Account'}
        />
        <Wrapper>
          <Spacer isDoubleBase />

          <CustomInput title={'Email'} value={'micktason@email.com'} />

          <Spacer isMedium />
          <Spacer isSmall />
          <CustomInput
            onPressIconRight={() => setShowPassword(prev => !prev)}
            iconNameRight={!showPassword ? 'eye-outline' : 'eye-off-outline'}
            iconTypeRight={'ionicon'}
            iconStyleRight={{
              marginBottom: responsiveWidth(5),
            }}
            secureTextEntry={!showPassword}
            title={'Password'}
            value={'925-565512-52'}
            inputStyle={{letterSpacing: responsiveWidth(1)}}
          />

          <Spacer isMedium />

          <Wrapper marginHorizontalBase flexDirectionRow alignItemsCenter>
            <Icon
              name={
                accepted ? 'checkmark-circle-sharp' : 'checkmark-circle-outline'
              }
              type="ionicon"
              color={colors.appColor1}
              onPress={() => setAccepted(prev => !prev)}
            />

            <Spacer isSmall horizontal />
            <Wrapper flex={1}>
              <Text
                isWhite
                isRegular
                style={
                  {
                    //lineHeight: responsiveFontSize(25),
                    //   color: colors.appColor1,
                  }
                }>
                I accept the{' '}
                <Text
                  isSmall
                  style={{color: colors.appTextColor8}}
                  //  onPress={() => navigate(routes.common,{screen:routes.termsOfService})}
                  isBoldFont>
                  Terms of Service
                </Text>{' '}
                and{' '}
                <Text
                  isSmall
                  style={{color: colors.appTextColor8}}
                  // onPress={() => navigate(routes.common,{screen:routes.privacyPolicy})}
                  isBoldFont>
                  Privacy Policy
                </Text>
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer height={responsiveHeight(10)} />
          <Buttons.ColoredGradient
            text="Lets go!"
            containerStyle={{marginHorizontal: responsiveWidth(12)}}
            // onPress={() => navigate(routes.app)}
          />
          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
