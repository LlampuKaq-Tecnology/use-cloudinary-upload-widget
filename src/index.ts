import CloudinaryProvider from "./context/CloudinaryProvider";
import useCloudinary from "./hooks/useCloudinary";
export { CloudinaryProvider, useCloudinary };
export interface CloudinaryOpt {
  sources?: (
    | "local"
    | "url"
    | "camera"
    | "image_search"
    | "google_drive"
    | "facebook"
    | "dropbox"
    | "instagram"
    | "shutterstock"
    | "getty"
    | "istock"
    | "unsplash"
  )[];
  showAdvancedOptions?: boolean;
  cropping?: boolean;
  multiple?: boolean;
  defaultSource?: string;
  folder?: string;
  styles: {
    palette: {
      window: string;
      sourceBg: string;
      windowBorder: string;
      tabIcon: string;
      inactiveTabIcon: string;
      menuIcons: string;
      link: string;
      action: string;
      inProgress: string;
      complete: string;
      error: string;
      textDark: string;
      textLight: string;
    };
    frame: {
      background: string;
    };
    fonts: {
      default: string | null;
      any: {
        url: string;
        active: boolean;
      };
    };
  };
}
