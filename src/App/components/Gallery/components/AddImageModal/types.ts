import {Dispatch, SetStateAction} from "react";

export interface Props {
  isAddImage: boolean;
  setIsAddImage: Dispatch<SetStateAction<boolean>>
}

export interface WrapperProps {
  isAddImage: boolean,
}