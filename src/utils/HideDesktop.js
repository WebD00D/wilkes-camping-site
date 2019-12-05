import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.span`
  @media (min-width: 640px) {
    display: none;
  }
`;

const HideDesktop = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HideDesktop;
