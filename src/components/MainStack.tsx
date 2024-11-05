import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { IDCaptureScreen } from "../screens/IDCaptureScreen";
import { PassportCaptureScreen } from "../screens/PassportCaptureScreen";
import { ProductSelectionScreen } from "../screens/ProductSelectionScreen";
import { AccountTypeScreen } from "../screens/AccountTypeScreen";
import { CustomerInfoScreen } from "../screens/CustomerInfoScreen";
import { ReferralScreen } from "../screens/ReferralScreen";
import { SuccessScreen } from "../screens/SuccessScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNavigator.Screen
        name="welcome"
        component={WelcomeScreen}
      />
      <StackNavigator.Screen
        name="IDCapture"
        component={IDCaptureScreen}
      />
      <StackNavigator.Screen
        name="passportCapture"
        component={PassportCaptureScreen}
      />
      <StackNavigator.Screen
        name="productSelection"
        component={ProductSelectionScreen}
      />
      <StackNavigator.Screen
        name="accountType"
        component={AccountTypeScreen}
      />
      <StackNavigator.Screen
        name="customerInfo"
        component={CustomerInfoScreen}
      />
      <StackNavigator.Screen
        name="referral"
        component={ReferralScreen}
      />
      <StackNavigator.Screen
        name="success"
        component={SuccessScreen}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);