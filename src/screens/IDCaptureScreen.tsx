import * as React from "react";
import { Camera } from "@nativescript/camera";
import { ImageAsset } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";

interface Props {
  navigation: FrameNavigationProp<any, "idCapture">;
  route: { params: { authMethod: string } };
}

export function IDCaptureScreen({ navigation, route }: Props) {
  const takePicture = async () => {
    try {
      const imageAsset: ImageAsset = await Camera.takePicture({
        width: 1920,
        height: 1080,
        keepAspectRatio: true,
        saveToGallery: false
      });
      
      // Here you would implement OCR processing
      navigation.navigate("PassportCapture", {
        idData: {
          // Sample data - replace with actual OCR results
          fullName: "John Doe",
          nationality: "UAE",
          idNumber: "784-1234-5678901-1"
        }
      });
    } catch (err) {
      console.error("Error taking picture:", err);
    }
  };

  return (
    <flexboxLayout className="bg-gray-100 h-full">
      <label className="gradient-header">
        ID Verification
      </label>
      
      <stackLayout className="card">
        <label className="text-xl text-center mb-4">
          Please position your ID card in the camera frame
        </label>
        
        <button className="gradient-button" onTap={takePicture}>
          Capture ID
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