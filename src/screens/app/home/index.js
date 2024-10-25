import React, {Component, useState} from 'react';
import {FlatList, Pressable, TextInput, View} from 'react-native';
import {
  Wrapper,
  Text,
  Images,
  Spacer,
  Icons,
  Buttons,
  ScrollViews,
  HeaderHome,
  Headers,
} from '../../../components';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';
import {
  colors,
  responsiveFontSize,
  appStyles,
  responsiveHeight,
  responsiveWidth,
  fontSizes,
  appSvgs,
} from '../../../services';
import {Icon} from '@rneui/base';

export default function Home() {
  const {} = useHooks();
  const data = [
    {
      lable: 'Today',
      day: '11',
      month: 'April',
    },
    {
      lable: 'Tomorrow',
      day: '12',
      month: 'April',
    },
    {
      lable: 'Wed',
      day: '13',
      month: 'April',
    },
    {
      lable: 'Thur',
      day: '14',
      month: 'April',
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState();
  const [hour, sethour] = useState('05');
  const [minutes, setMinutes] = useState('00');
  const [am, setAm] = useState('am');

  return (
    <Wrapper isMain>
      <Headers.Secondary title={'Schedule a Time'} />
      <ScrollViews.KeyboardAvoiding>
        <Spacer isSmall />
        <Text
          alignTextCenter
          isTinyTitle
          style={{fontSize: responsiveFontSize(22)}}>
          Please Enter Details
        </Text>
        <Spacer isBasic />
        {/* Days */}
        <Days
          data={data}
          selectedIndex={selectedIndex}
          onPressItem={(item, index) => setSelectedIndex(index)}
        />
        <Wrapper marginVerticalSmall marginHorizontalBase>
          <Text isBoldFont isSmall>
            Enter Time
          </Text>
        </Wrapper>
        {/* Time */}
        <Time
          hour={hour}
          minute={minutes}
          onChangeHour={h => sethour(h)}
          onChangeMinute={m => setMinutes(m)}
          am={am}
          onPressAm={v => setAm(v)}
        />
        <Spacer isBasic />
        <Pressable>
          <Wrapper
            isColored
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween
            style={appStyles.shadow}>
            <Wrapper>
              <Text isTextColor5 isBoldFont isSmall>
                Enter Location
              </Text>
              <Spacer isTiny />
              <Text style={{color: colors.appTextColor10}} isBoldFont isSmall>
                Please enter your address
              </Text>
            </Wrapper>
            <Icons.Svg
              onPress={() => console.log('location')}
              size={responsiveFontSize(22)}
              svg={appSvgs.location}
            />
          </Wrapper>
        </Pressable>
        <Spacer isBasic />
        <Pressable>
          <Wrapper
            isColored
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween
            style={appStyles.shadow}>
            <Wrapper>
              <Text isTextColor5 isBoldFont isSmall>
                Oil type
              </Text>
              <Spacer isTiny />
              <Text style={{color: colors.appTextColor11}} isBoldFont isSmall>
                Please select Oil type from here
              </Text>
              <Text style={{color: colors.appTextColor11}} isSmall>
                (All Oil High Quality Synthetic)
              </Text>
            </Wrapper>
            <Icon
              //style={appStyles.marginHorizontalSmall}
              name="arrow-down"
              color={colors.black}
              type="simple-line-icon"
              size={responsiveFontSize(26)}
            />
          </Wrapper>
        </Pressable>
        <Spacer isBasic />
        <Spacer isSmall />

        <Buttons.ColoredGradient
          gradientColor={colors.appButtonGradiantColors2}
          containerStyle={[appStyles.marginHorizontalLarge, appStyles.shadow]}
          text={'Lock it in!'}
        />
        <Spacer isBasic />
        <Spacer isDoubleBase />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
const Time = ({hour, onChangeHour, minute, onChangeMinute, am, onPressAm}) => {
  const isAm = am === 'AM';
  const isPm = am === 'PM';
  const InputBox = ({containerStyle, ...props}) => {
    return (
      <Wrapper
        style={[
          {
            height: responsiveWidth(31),
            width: responsiveWidth(30),
            backgroundColor: colors.appBgColor1,
            borderRadius: 10,
            ...appStyles.shadow,
            ...appStyles.center,
          },
          containerStyle,
        ]}>
        <TextInput
          style={{fontSize: fontSizes.h2, color: colors.appTextColor5}}
          {...props}
        />
      </Wrapper>
    );
  };
  const OptionsButton = ({onPress, lable, isActive, containerStyle}) => {
    return (
      <Pressable
        onPress={onPress}
        style={[
          {
            flex: 1,
            paddingHorizontal: responsiveWidth(2),
            backgroundColor: isActive ? colors.appColor1 : colors.appBgColor1,
            justifyContent: 'center',
            // borderRadius: 10,
            borderTopLeftRadius: 9,
            borderTopRightRadius: 9,
          },
          containerStyle,
        ]}>
        <Text isTinyTitle isRegularFont>
          {lable}
        </Text>
      </Pressable>
    );
  };
  return (
    <Wrapper marginHorizontalBase>
      <Wrapper flexDirectionRow>
        <Wrapper flex={1} flexDirectionRow justifyContentSpaceBetween>
          <InputBox value={hour} onChangeText={h => onChangeHour(h)} />
          <Wrapper justifyContentCenter>
            <Text isTextColor5 style={{fontSize: responsiveFontSize(50)}}>
              :
            </Text>
          </Wrapper>
          <InputBox
            containerStyle={{backgroundColor: colors.appColor1}}
            value={minute}
            onChangeText={m => onChangeMinute(m)}
          />
        </Wrapper>
        <Spacer horizontal isBasic />
        <Spacer horizontal isTiny />

        <Wrapper
          style={{
            borderWidth: 0.5,
            borderRadius: 9,
            // borderColor: colors.appTextColor5,
          }}>
          <OptionsButton
            onPress={() => onPressAm('AM')}
            isActive={isAm}
            lable={'AM'}
          />

          <Wrapper style={{borderBottomWidth: 0.5}} />
          <OptionsButton
            lable={'PM'}
            isActive={isPm}
            containerStyle={{
              borderBottomLeftRadius: 9,
              borderBottomRightRadius: 9,
            }}
            onPress={() => onPressAm('PM')}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
const Days = ({data, selectedIndex, onPressItem}) => {
  return (
    <Wrapper>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => <Spacer width={responsiveWidth(2.5)} />}
        ListHeaderComponent={() => <Spacer width={responsiveWidth(4)} />}
        ListFooterComponent={() => <Spacer width={responsiveWidth(4)} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          const {lable, day, month} = item;
          const isSelected = selectedIndex == index;
          return (
            <Pressable
              onPress={() => onPressItem(item, index)}
              style={{
                height: responsiveWidth(30),
                width: responsiveWidth(30),
                backgroundColor: isSelected
                  ? colors.appColor1
                  : colors.appBgColor1,
                borderRadius: 10,
                ...appStyles.shadow,
                marginVertical: responsiveHeight(1),
              }}>
              <Wrapper isCenter flex={1}>
                <Text isTextColor5 isMedium isMediumFont>
                  {lable}
                </Text>
                <Text isTextColor5 isMedium isMediumFont>
                  {day}
                </Text>
                <Text isTextColor5 isMedium isMediumFont>
                  {month}
                </Text>
              </Wrapper>
            </Pressable>
          );
        }}
      />
    </Wrapper>
  );
};
