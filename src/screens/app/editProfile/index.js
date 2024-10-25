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

  //   const {accepted, setAccepted, showPassword, setShowPassword} = useHooks();
  return (
    <Wrapper isImageBackground source={appImages.background_1} style={[{}]}>
      <Headers.Primary
        //  backIconSize={responsiveFontSize(30)}
        titleStyle={colors.appTextColor10}
        containerStyle={{
          paddingTop: responsiveHeight(3),
          backgroundColor: colors.transparent,
        }}
        showBackArrow
        //  invertColors
        title={'Edit Your Profile'}
      />
      <ScrollViews.KeyboardAvoiding>
        <Wrapper>
          <Spacer isBasic />

          <CustomInput title={'First Name'} value={'Mick'} />
          <Spacer isBasic />
          <CustomInput title={'Last Name'} value={'Tason'} />
          <Spacer isBasic />
          <CustomInput
            //  onPressIconRight={() => setShowPassword(prev => !prev)}
            iconStyleRight={{
              marginBottom: responsiveWidth(5),
            }}
            iconNameRight={'calendar-outline'}
            iconTypeRight={'ionicon'}
            title={'Birthday'}
            value={'09 / 08 / 1996'}
            //inputStyle={{letterSpacing: responsiveWidth(1)}}
          />
          <Spacer isBasic />
          <CustomInput
            title={'Vehicle Make'}
            placeholder={'Enter the make of your Vehicle'}
          />
          <Spacer isBasic />
          <CustomInput
            title={'Vehicle Model'}
            placeholder={'Enter model of your Vehicle'}
          />
          <Spacer isBasic />
          <CustomInput
            title={'Vehicle Year'}
            placeholder={'Enter year of your Vehicle'}
          />
          <Spacer isBasic />
          <CustomInput
            title={'Vehicle Color'}
            placeholder={'Enter color of your Vehicle'}
          />
          <Spacer isBasic />
          <CustomInput
            title={'Vehicle Mileage'}
            placeholder={'If unknown enter approximate'}
          />
          <Spacer height={responsiveHeight(5)} />
          <Buttons.ColoredGradient
            text="Save Changes"
            containerStyle={{marginHorizontal: responsiveWidth(12)}}
            // onPress={() => navigate(routes.app)}
          />
          <Spacer height={responsiveHeight(15)} />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
