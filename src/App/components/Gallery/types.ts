import {MouseEventHandler} from "react";

export interface PhotoProps {
  backgroundImage: string;
  onClick: MouseEventHandler<HTMLLIElement>;
}
