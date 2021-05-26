import React, { FC, useContext } from "react";
import { Button } from "../../../../main-styled-components";
import { Wrapper, Image } from "./styled";
import { Props } from "./types";
import axios from "axios";
import { SERVER, DELETE_IMAGE } from "../../../../../constants/paths";
import { UserContext } from "../../../../../utils/contexts/user";
import { LoaderContext } from "../../../../../utils/contexts/loader";

export const ShowImageModal: FC<Props> = ({
  selectedImageObj,
  setSelectedImageObj,
}) => {
  const { _id, img } = selectedImageObj;
  const { user, setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(LoaderContext);

  const onClickWrapper = (event: any) => {
    if (event.target.tagName === "SECTION") {
      setSelectedImageObj({
        img: "",
        _id: "",
      });
    }
  };

  const fun = () => {
    setIsLoading(true);
    axios
      .post(`${SERVER}${DELETE_IMAGE}`, { userId: user.id, imageId: _id })
      .then((res) => {
        setUser({ ...user, gallery: res.data.data });
        setSelectedImageObj({
          img: "",
          _id: "",
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        console.log(err.response);
      });
  };

  if (_id) {
    return (
      <Wrapper onClick={onClickWrapper}>
        <Image img={`data:image/jpg;base64,${img}`} />
        <Button onClick={fun}>Delete Image</Button>
      </Wrapper>
    );
  }
  return null;
};
