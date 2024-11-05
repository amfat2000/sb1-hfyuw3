import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

interface Props {
  navigation: FrameNavigationProp<any, "referral">;
  route: { params: { referenceNumber: string } };
}

export function ReferralScreen({ navigation, route }: Props) {
  return (
    <flexboxLayout className="bg-gray-100 h-full">
      <label className="gradient-header">
        Branch Referral
      </label>
      
      <stackLayout className="card">
        <label className="text-xl text-center mb-4 text-red-500">
          We need you to visit a branch
        </label>
        
        <label className="text-lg text-center mb-4">
          Due to additional verification requirements, please visit your nearest branch.
        </label>
        
        <label className="text-lg text-center mb-4 font-bold">
          Your Reference Number: {route.params.referenceNumber}
        </label>
        
        <label className="text-base text-center mb-4">
          Please keep this reference number for your records.
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