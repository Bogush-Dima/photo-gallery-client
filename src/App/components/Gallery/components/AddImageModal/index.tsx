import React, { FC } from "react";
import { Props } from "./types";
import { Input, Label, Wrapper, Form } from "./styled";

export const AddImageModal: FC<Props> = ({ isAddImage }) => {
  return (
    <Wrapper isAddImage={isAddImage}>
      <Form>
        <Input type="file" name="file" id="file" className="inputfile" />
        <Label htmlFor="file">Choose File</Label>
      </Form>
    </Wrapper>
  );
};
