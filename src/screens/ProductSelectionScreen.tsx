import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { ProductType } from "../types";

interface Props {
  navigation: FrameNavigationProp<any, "productSelection">;
}

export function ProductSelectionScreen({ navigation }: Props) {
  const handleProductSelection = (product: ProductType) => {
    if (product === "ACCOUNT_OPENING") {
      navigation.navigate("AccountType");
    } else {
      navigation.navigate("CustomerInfo", { product });
    }
  };

  return (
    <flexboxLayout className="bg-gray-100 h-full">
      <label className="gradient-header">
        Select Product
      </label>
      
      <stackLayout className="card">
        <button 
          className="gradient-button"
          onTap={() => handleProductSelection("ACCOUNT_OPENING")}
        >
          Account Opening
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => handleProductSelection("PERSONAL_FINANCE")}
        >
          Personal Finance
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => handleProductSelection("COVERED_CARD")}
        >
          Covered Card
        </button>
        
        <button 
          className="gradient-button"
          onTap={() => handleProductSelection("OTHER")}
        >
          Other Services
        </button>
        
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