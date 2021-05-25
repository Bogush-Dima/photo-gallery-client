import React, { FC, useState } from "react";
import { Props } from "./types";
import {
  Input,
  Label,
  Wrapper,
  Form,
  ButtonsWrapper,
  SubmitButton,
  ResetButton,
  FileNameInput,
} from "./styled";
import axios from "axios";
import { SERVER, ADD_IMAGE } from "../../../../constants/paths";

export const AddImageModal: FC<Props> = ({ isAddImage, setIsAddImage }) => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState('')

  const onClickWrapper = (event: any) => {
    if (event.target.tagName === 'DIV') {
      setIsAddImage(false)
    }
  }

  // TODO search correct type for this event (input type file)
  const onChange = (event: any): void => {
    const uploadFile = event.target.files[0]
    // TODO here I did reset value, because after click reset button and adding some picture again, this function don't worked
    event.target.value = ''
    setFile(uploadFile);
    setFileName(uploadFile.name)
  };

  const reset = () => {
    setFile('')
    setFileName('')
  }

  const submitImage = async (event: any) => {
    event.preventDefault();
    if (file) {
      const imageData = new FormData();
      imageData.append("userId", "60ab64660c68513fc40f1d50");
      imageData.append("image", file);

      axios
        .post(`${SERVER}${ADD_IMAGE}`, imageData)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Wrapper onClick={onClickWrapper} isAddImage={isAddImage}>
      <Form>
        <FileNameInput readOnly value={fileName} placeholder='Nothing' />
        <ButtonsWrapper>
          <Input
            type="file"
            name="file"
            onChange={onChange}
            id="file"
          />
          <Label htmlFor="file">Choose File</Label>
          <ResetButton onClick={reset} disabled={!Boolean(file)}>Reset</ResetButton>
          <SubmitButton onClick={submitImage} disabled={!Boolean(file)}>
            Submit
          </SubmitButton>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};
