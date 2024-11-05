import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

interface Props {
  navigation: FrameNavigationProp<any, "success">;
  route: { params: { accountNumber: string } };
}

export function SuccessScreen({ navigation, route }: Props) {
  return (
    <flexboxLayout className="bg-gray-100 h-full">
      <label className="gradient-header">
        Account Created Successfully
      </label>
      
      <stackLayout className="card">
        <label className="text-xl text-center mb-4 text-green-500">
          Congratulations!
        </label>
        
        <label className="text-lg text-center mb-4">
          Your account has been created successfully.
        </label>
        
        <label className="text-lg text-center mb-4 font-bold">
          Account Number: {route.params.accountNumber}
        </label>
        
        <label className="text-base text-center mb-4">
          Account details and IBAN information have been sent to your email.
        </label>
        
        <button 
          className="gradient-button"
          onTap={() => navigation.navigate("welcome")}
        >
          Back to Home
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}