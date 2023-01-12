import React, { createContext, useEffect, useState } from "react";
import { CloudinaryOpt } from "..";
import useScript from "../hooks/useScript";
import { defaultCloudinary } from "./defaultCloudinary";
export const CloudinaryContext = createContext({});
function CloudinaryProvider({
  children,
  cloudName,
  uploadPreset,
  config,
  fn,
}: {
  children: React.ReactNode;
  cloudName: string | undefined;
  uploadPreset: string | undefined;
  config?: CloudinaryOpt;
  fn?: (error: any, result: any) => void;
}) {
  const status = useScript(
    "https://upload-widget.cloudinary.com/global/all.js"
  );

  return (
    <CloudinaryContext.Provider
      value={{
        status,
        cloudName,
        uploadPreset,
        config: config ?? defaultCloudinary,
        fn,
      }}
    >
      {children}
    </CloudinaryContext.Provider>
  );
}

export default CloudinaryProvider;
