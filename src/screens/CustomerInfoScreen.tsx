import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { CustomerInfo, PROHIBITED_COUNTRIES } from "../types";

interface Props {
  navigation: FrameNavigationProp<any, "customerInfo">;
  route: { params: { accountType?: string } };
}

export function CustomerInfoScreen({ navigation, route }: Props) {
  const [customerInfo, setCustomerInfo] = React.useState<CustomerInfo>({
    fullName: "",
    nationality: "",
    idNumber: "",
    passportNumber: "",
    designation: "",
    email: "",
    salaryRange: "",
    mobileNumber: ""
  });

  const handleSubmit = () => {
    if (PROHIBITED_COUNTRIES.includes(customerInfo.nationality)) {
      const referenceNumber = Math.random().toString(36).substring(7).toUpperCase();
      navigation.navigate("ReferralScreen", { referenceNumber });
    } else {
      const accountNumber = Math.random().toString().slice(2, 12);
      navigation.navigate("SuccessScreen", { accountNumber });
    }
  };

  return (
    <scrollView className="bg-gray-100">
      <stackLayout className="p-4">
        <label className="gradient-header">
          Additional Information
        </label>
        
        <stackLayout className="card">
          <textField
            hint="Designation"
            text={customerInfo.designation}
            onTextChange={(args) => setCustomerInfo({
              ...customerInfo,
              designation: args.value
            })}
            className="input p-4 m-2 border-b-2"
          />
          
          <textField
            hint="Email Address"
            keyboardType="email"
            text={customerInfo.email}
            onTextChange={(args) => setCustomerInfo({
              ...customerInfo,
              email: args.value
            })}
            className="input p-4 m-2 border-b-2"
          />
          
          <dropDown
            items={["1-5000 AED", "5000-10000 AED", "10000+ AED"]}
            selectedIndex={0}
            onSelectedIndexChanged={(args) => setCustomerInfo({
              ...customerInfo,
              salaryRange: args.newIndex.toString()
            })}
            className="p-4 m-2"
          />
          
          <textField
            hint="Mobile Number (971...)"
            keyboardType="phone"
            text={customerInfo.mobileNumber}
            onTextChange={(args) => setCustomerInfo({
              ...customerInfo,
              mobileNumber: args.value
            })}
            className="input p-4 m-2 border-b-2"
          />
          
          <button 
            className="gradient-button"
            onTap={handleSubmit}
          >
            Submit
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
      </stackLayout>
    </scrollView>
  );
}