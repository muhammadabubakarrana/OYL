import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  appImages,
  appStyles,
  colors,
  responsiveFontSize,
  responsiveWidth,
  routes,
  tabs,
  useReduxStore,
} from '../../services';
import {Images, Wrapper} from '../../components';
import {Icon} from '@rneui/base';
import * as App from '../../screens/app';
const BottomTabStack = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const tabIconSize = responsiveFontSize(27);

  const TabIcon = ({color, iconName, iconType, size, focused, image}) => {
    return (
      <Wrapper
        alignItemsCenter
        style={{
          flex: 1,
          width: responsiveWidth(15),
          justifyContent: 'center',
          marginTop: 5,
        }}>
        {!image ? (
          <Icon
            name={iconName}
            type={iconType}
            size={tabIconSize}
            color={color}
            focused={focused}
          />
        ) : (
          <Images.Round
            source={{uri: image}}
            size={tabIconSize}
            style={{opacity: focused ? 1 : 0.5}}
          />
        )}
      </Wrapper>
    );
  };
  return (
    <>
      <BottomTabStack.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarLabelStyle:
            route?.name === routes.editProfile
              ? [appStyles.textSmall, appStyles.textColor2]
              : appStyles.textSmall,
          // ...tabs.tabBarOptions,
          tabBarStyle:
            route?.name === routes.editProfile
              ? {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: colors.transparent,
                  borderTopWidth: 0,
                }
              : {backgroundColor: colors.appBgColor1, borderTopWidth: 1}, //tabs.tabBarOptions,
        })}>
        <BottomTabStack.Screen
          name={routes.home}
          component={App.Home}
          options={() => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  iconName="home"
                  iconType="feather"
                  size={tabIconSize}
                  color={colors.black}
                  focused={focused}
                />
              );
            },
          })}
        />

        <BottomTabStack.Screen
          name={routes.editProfile}
          component={App.EditProfile}
          options={() => ({
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  iconName="account"
                  iconType="material-community"
                  size={tabIconSize}
                  color={colors.black}
                  focused={focused}
                />
              );
            },
          })}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate(routes.Menu);
            },
          })}
        />
      </BottomTabStack.Navigator>
    </>
  );
}
