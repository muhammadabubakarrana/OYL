import React, {Component} from 'react';
import {Image, Pressable, View} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {
  Text,
  TextInputs,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  StatusBars,
  Images,
  CustomInput,
} from '../../../components';
import {
  responsiveFontSize,
  responsiveHeight,
  routes,
  appSvgs,
  responsiveWidth,
  sizes,
  appImages,
  colors,
  appStyles,
} from '../../../services';
import {useHooks} from './hooks';
import LinearGradient from 'react-native-linear-gradient';
export default function Index(props) {
  //const {navigate} = props.navigation;

  const {handleLogin} = useHooks();
  return (
    <Wrapper
      //  isMain
      isImageBackground
      source={appImages.background_1}
      style={[{}]}>
      <Spacer isStatusBarHeigt />
      <StatusBars.Light />
      <ScrollViews.KeyboardAvoiding>
        <Wrapper>
          <Spacer isDoubleBase />
          <Wrapper marginVerticalLarge alignItemsCenter>
            <Image
              style={{width: responsiveWidth(65), height: responsiveWidth(55)}}
              source={appImages.Oyl_Logo_Yellow}
              resizeMode="contain"
            />
          </Wrapper>
          <Spacer isMedium />
          <Text
            isMedium
            isMediumFont
            alignTextCenter
            style={{color: colors.appColor1}}>
            Enter your phone number to log in!
          </Text>
          <Spacer isMedium />
          <CustomInput title={'Phone'} value={'925-565512-52'} />
          <Spacer isMedium />
          <Wrapper marginHorizontalMedium>
            <Text
              isSmall
              isLightFont
              alignTextRight
              isWhite
              //    onPress={() => navigate(routes.resetPassword)}
            >
              Do not have an account?
              <Text
                isBoldFont
                style={{color: colors.appColor1}}
                //    onPress={() => navigate(routes.resetPassword)}
              >
                {' '}
                Create
              </Text>
            </Text>
          </Wrapper>
          <Spacer height={responsiveHeight(10)} />
          <Buttons.ColoredGradient
            text={'LUBE ME UP!'}
            containerStyle={{marginHorizontal: responsiveWidth(12)}}
          />
          <Spacer isMedium />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
