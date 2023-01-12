import React, { useEffect, useState } from "react";
import { CloudinaryOpt } from "..";
import useCloudinaryContext from "./useCloudinaryContext";
function useCloudinary({
  config,
  fn,
}: {
  config?: CloudinaryOpt;
  fn?: (error: any, result: any) => void;
}) {
  const { cloudName, status, uploadPreset, config: c } = useCloudinaryContext();
  const [img, setImg] = useState<
    | {
        id: string;
        name: string;
        size: string;
        src: string;
      }[]
    | undefined
  >();
  const [cloudinaryWidget, setWidget] = useState<any>();
  useEffect(() => {
    const cloudinaryConf = config ?? c;
    //@ts-ignore
    let cloudinaryWidget = window?.cloudinary?.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        ...cloudinaryConf,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          setImg([
            //@ts-ignore
            ...img,
            {
              id: result.info.asset_id,
              name: result.info.original_filename,
              size: result.info.bytes,
              src: result.info.url,
            },
          ]);
        }
        fn != undefined && fn(error, result);
      }
    );
    setWidget(cloudinaryWidget);
  }, [status]);

  const showUploadWidget = () => {
    cloudinaryWidget?.open();
  };
  return [img, showUploadWidget];
}
export default useCloudinary;
