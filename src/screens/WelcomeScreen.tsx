import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthMethod } from "../types";

interface Props {
  navigation: FrameNavigationProp<any, "welcome">;
}

export function WelcomeScreen({ navigation }: Props) {
  const handleAuthMethod = (method: AuthMethod) => {
    navigation.navigate("IDCapture", { authMethod: method });
  };

  return (
    <flexboxLayout className="bg-gray-100 h-full">
      <label className="gradient-header w-full">
        Welcome to Digital Banking
      </label>
      
      <stackLayout className="card">
        <label className="text-xl text-center mb-4">
          Please select your authentication method
        </label>
        
        <button
          className="gradient-button"
          onTap={() => handleAuthMethod("ID_CARD")}
        >
          Use ID Card Reader
        </button>
        
        <button
          className="gradient-button"
          onTap={() => handleAuthMethod("UAE_PASS")}
        >
          Use UAE Pass
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}