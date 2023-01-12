import React, { useContext } from "react";
import { CloudinaryOpt } from "..";
import { CloudinaryContext } from "../context/CloudinaryProvider";

function useCloudinaryContext() {
  const cloudinary = useContext(CloudinaryContext) as {
    cloudName: string;
    uploadPreset: string;
    status: boolean;
    config: CloudinaryOpt;
  };
  return cloudinary;
}

export default useCloudinaryContext;
