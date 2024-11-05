import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AccountType } from "../types";

interface Props {
  navigation: FrameNavigationProp<any, "accountType">;
}

export function AccountTypeScreen({ navigation }: Props) {
  const handleAccountSelection = (accountType: AccountType) => {
    navigation.navigate("CustomerInfo", { accountType });
  };

  return (
    <flexboxLayout className="bg-gray-100 h-full">
      <label className="gradient-header">
        Select Account Type
      </label>
      
      <stackLayout className="card">
        <button 
          className="gradient-button"
          onTap={() => handleAccountSelection("CURRENT")}
        >
          Current Account
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => handleAccountSelection("SAVINGS")}
        >
          Savings Account
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => handleAccountSelection("MINOR")}
        >
          Minor Account
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => handleAccountSelection("JOINT")}
        >
          Joint Account
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => navigation.goBack()}
        >
          Previous
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => navigation.navigate("welcome")}
        >
          Home
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}