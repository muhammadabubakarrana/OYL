import React, {Component} from 'react';
import {Wrapper, Text, Headers, Lines} from '../../../components';
import {useHooks} from './hooks';
import {
  appStyles,
  colors,
  responsiveFontSize,
  responsiveHeight,
  routes,
} from '../../../services';
import {Pressable} from 'react-native';
import {Icon} from '@rneui/base';

export default function Index({navigation}) {
  const {replace, navigate} = navigation;
  const {} = useHooks();
  let options = [
    {lable: 'Edit Profile', value: 'editProfile', route: routes.editProfile},
    {
      lable: 'Share Your Feedback',
      value: 'Share Your Feedback',
      route: routes.editProfile,
    },
    {
      lable: 'Terms of Service',
      value: 'Terms of Service',
      route: routes.editProfile,
    },
    {
      lable: 'Privacy Policy',
      value: 'Privacy Policy',
      route: routes.editProfile,
    },
    {lable: 'About Us', value: 'About Us', route: routes.editProfile},
    {lable: 'Logout', value: 'Logout', route: null},
  ];
  const HandleOptionPress = (item, index) => {
    const {lable, route, value} = item;
    const isLogout = value === 'Logout';
    if (isLogout) {
      //logout logic
    }
    if (value === 'editProfile') {
      navigate(route);
      //logout logic
    } else {
      replace(route);
    }
  };
  return (
    <Wrapper flex={1} justifyContentFlexend>
      <Wrapper
        background1
        style={[
          {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingVertical: responsiveHeight(5),
          },
          appStyles.shadow,
        ]}>
        <Wrapper
          isBorderedWrapper
          paddingVerticalZero
          paddingHorizontalZero
          style={{borderColor: colors.appBgColor3, borderWidth: 1}}>
          {options.map((item, index) => {
            const {lable, route, value} = item;
            const isLogout = value === 'Logout';
            return (
              <Pressable
                onPress={() => HandleOptionPress(item, index)}
                key={index}>
                <Wrapper
                  paddingVerticalSmall
                  marginHorizontalBase
                  justifyContentSpaceBetween
                  alignItemsCenter
                  flexDirectionRow>
                  <Text
                    alignTextCenter
                    isMedium
                    isBoldFont={isLogout}
                    style={{
                      color: !isLogout
                        ? colors.appTextColor11
                        : colors.appTextColor1,
                    }}>
                    {lable}
                  </Text>
                  <Icon
                    name="chevron-right"
                    type="feather"
                    size={responsiveFontSize(22)}
                    style={{opacity: 0.5}}
                  />
                </Wrapper>
                {index !== options.length - 1 && (
                  <Lines.Horizontal
                    style={{borderColor: colors.appBgColor3, opacity: 0.5}}
                  />
                )}
              </Pressable>
            );
          })}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}
