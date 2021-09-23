import { ViteSSGContext } from "vite-ssg";

export type UserModule = (ctx: ViteSSGContext) => void;
export type navigationMenuType = [
  { name: string; isEnabled: boolean; href: string | undefined }
];
