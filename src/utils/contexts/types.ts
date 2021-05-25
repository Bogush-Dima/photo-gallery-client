import {Dispatch, SetStateAction} from "react";

interface GalleryItem {
  img: string,
  _id: string
}

export interface UserContextValues {
  user: {
    id: string
    email: string
    gallery: Array<GalleryItem>,
  };
  setUser: SetStateAction<any>;
}


export interface LoaderContextValues {
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}