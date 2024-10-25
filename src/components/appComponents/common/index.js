import React from 'react';
import Wrapper from '../../wrapper';
import Text from '../../text';
import {
  appSvgs,
  appStyles,
  colors,
  responsiveWidth,
  sizes,
  responsiveFontSize,
} from '../../../services';
import * as TextInputs from '../../textInput';
import * as Modals from '../../modals';
import * as Icons from '../../icons';

export const ChatInput = ({onPressEmojy, onPressSend, ...props}) => {
  return (
    <Wrapper
      background1
      style={[
        {
          paddingTop: sizes.marginVertical / 2,
          paddingBottom: sizes.marginVertical / 1.5,
        },
        appStyles.shadowExtraDark,
      ]}>
      <Wrapper flexDirectionRow alignItemsFlexEnd>
        <Icons.Button
          iconName={'smile'}
          iconType={'feather'}
          buttonColor={colors.appBgColor1}
          iconColor={colors.appTextColor5}
          iconSize={responsiveWidth(7)}
          buttonSize={responsiveWidth(10)}
          isRound
          buttonStyle={[appStyles.marginHorizontalTiny]}
          onPress={onPressEmojy}
        />
        <Wrapper flex={1}>
          <TextInputs.Colored
            placeholder={'Write a message'}
            placeholderTextColor={colors.appTextColor5}
            containerStyle={{...appStyles.marginHorizontalZero}}
            inputContainerStyle={{
              backgroundColor: colors.appBgColor1,
              borderRadius: sizes.cardRadius / 2,
            }}
            multiline
            inputStyle={[
              {
                height: null,
              },
              appStyles.paddingHorizontalZero,
              appStyles.marginVerticalZero,
              appStyles.paddingVerticalSmall,
              appStyles.fontRegular,
              {},
            ]}
            {...props}
          />
        </Wrapper>
        <Icons.Button
          iconName={'send'}
          iconType={'feather'}
          buttonColor={colors.appColor1}
          iconColor={colors.appTextColor6}
          iconSize={responsiveWidth(6)}
          buttonSize={responsiveWidth(10)}
          isRound
          buttonStyle={[appStyles.marginHorizontalSmall]}
          onPress={onPressSend}
        />
      </Wrapper>
    </Wrapper>
  );
};

export const TitleInfoPrimary = ({
  title,
  info,
  isBold,
  titleStyel,
  infoStyle,
}) => {
  const titleInfoBold = isBold || false;
  return (
    <Wrapper marginHorizontalBase flexDirectionRow justifyContentSpaceBetween>
      <Text isMedium isBoldFont={titleInfoBold} style={titleStyel}>
        {title}
      </Text>
      <Text isMedium isBoldFont={titleInfoBold} style={infoStyle}>
        {info}
      </Text>
    </Wrapper>
  );
};

export const IconButtonPrimary = ({...props}) => {
  return (
    <Icons.Button
      buttonColor={colors.appColor1}
      iconColor={colors.appTextColor6}
      iconSize={responsiveWidth(6)}
      buttonSize={responsiveWidth(10)}
      iconName={'arrow-left'}
      isRound
      {...props}
    />
  );
};

export const NoDataViewPrimary = ({containerStyle, ...props}) => {
  return (
    <Wrapper style={containerStyle}>
      <Icons.WithText
        iconName={'search-off'}
        iconType="material"
        text={'No Data Available'}
        direction="column"
        iconSize={responsiveHeight(15)}
        tintColor={colors.appTextColor4}
        textStyle={[
          appStyles.textRegular,
          appStyles.textGray,
          appStyles.textCenter,
        ]}
        titleStyle={[
          appStyles.textMedium,
          appStyles.fontBold,
          appStyles.textGray,
          appStyles.textCenter,
        ]}
        textContainerStyle={[appStyles.alignItemsCenter]}
        {...props}
      />
    </Wrapper>
  );
};

export const SuccessPopup = ({...PopupPrimaryProps}) => {
  return (
    <Modals.PopupPrimary
      // visible={isFoodLoggedPopupVisible}
      // toggle={toggleFoodLoggedPopup}
      // title={'Food Logged'}
      // buttonText1={'Add More'}
      // buttonText2={'Done'}
      // onPressButton1={() => {
      //     toggleFoodLoggedPopup()
      // }}
      // onPressButton2={() => {
      //     toggleFoodLoggedPopup()
      //     goBack()
      // }}
      titleStyle={[appStyles.h6, appStyles.textPrimaryColor]}
      icon={<Icons.Svg svg={appSvgs.arrow_left} size={responsiveWidth(25)} />}
      // topMargin={responsiveHeight(55)}
      {...PopupPrimaryProps}
    />
  );
};

export const CustomInput = ({
  title,
  value,
  iconNameRight,
  iconTypeRight,
  secureTextEntry,
  onPressIconRight,
  onChangeText,
  inputStyle,
  iconStyleRight,
  placeholder,
  ...props
}) => {
  return (
    <TextInputs.Colored
      placeholderTextColor={colors.appTextColor9}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onPressIconRight={onPressIconRight}
      iconNameRight={iconNameRight}
      iconTypeRight={iconTypeRight}
      iconStyleRight={iconStyleRight}
      secureTextEntry={secureTextEntry}
      containerStyle={[
        {
          backgroundColor: colors.appColor1,
          borderRadius: sizes.inputRadius,
        },
        appStyles.shadowDark,
      ]}
      inputContainerStyle={{backgroundColor: colors.transparent}}
      titleStyle={{
        color: colors.appTextColor5,
        marginLeft: sizes.marginHorizontal,
        marginBottom: responsiveWidth(-3),
        marginTop: responsiveWidth(2),
        ...appStyles.textSmall,
        ...appStyles.fontBold,
      }}
      inputStyle={[
        {fontSize: responsiveFontSize(15), color: colors.appTextColor4},
        inputStyle,
      ]}
      title={title}
      value={value}
      {...props}
    />
  );
};
