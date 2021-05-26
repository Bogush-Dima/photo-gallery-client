import React, { FC, useContext } from "react";
import { LoaderContext } from "../../../utils/contexts/loader";
import { Wrapper, Container } from "./styled";

export const Loader: FC = () => {
  const { isLoading } = useContext(LoaderContext);

  if (isLoading) {
    return (
      <Wrapper>
        <Container />
      </Wrapper>
    );
  }

  return null;
};
