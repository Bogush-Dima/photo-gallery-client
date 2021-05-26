import React, { FC } from "react";
import {Button} from "../../../../main-styled-components";
import {Wrapper, Image} from "./styled";
import {Props} from "./types";

export const ShowImageModal: FC<Props> = ({image}) => {
  return (
    <Wrapper>
      <Image image={image} />
        <Button>Delete Image</Button>
    </Wrapper>
  );
};
