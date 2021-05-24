import { SetStateAction } from "react";

interface GalleryItem {
  img: Array<string>,
  _id: string
}

export interface UserContextValues {
  user: {
    id: string
    email: string
    gallery: Array<GalleryItem>,
  };
  setUser: SetStateAction<{}>;
}
