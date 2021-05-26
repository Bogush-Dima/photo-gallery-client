import { Dispatch, SetStateAction } from "react";

export interface Props {
  selectedImageObj: {
    _id: string;
    img: string;
  };
  setSelectedImageObj: Dispatch<SetStateAction<{ img: string; _id: string }>>;
}

export interface ImageProps {
  img: string;
}
