import * as React from "react";
import { Camera } from "@nativescript/camera";
import { ImageAsset } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";

interface Props {
  navigation: FrameNavigationProp<any, "passportCapture">;
  route: { params: { idData: any } };
}

export function PassportCaptureScreen({ navigation, route }: Props) {
  const takePicture = async () => {
    try {
      const imageAsset: ImageAsset = await Camera.takePicture({
        width: 1920,
        height: 1080,
        keepAspectRatio: true,
        saveToGallery: false
      });
      
      // Combine ID and passport data
      const customerData = {
        ...route.params.idData,
        passportNumber: "P123456789" // Sample data - replace with OCR results
      };
      
      navigation.navigate("ProductSelection", { customerData });
    } catch (err) {
      console.error("Error taking picture:", err);
    }
  };

  return (
    <flexboxLayout className="bg-gray-100 h-full">
      <label className="gradient-header">
        Passport Verification
      </label>
      
      <stackLayout className="card">
        <label className="text-xl text-center mb-4">
          Please position your passport in the camera frame
        </label>
        
        <button className="gradient-button" onTap={takePicture}>
          Capture Passport
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