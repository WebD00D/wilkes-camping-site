import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const HideMobile = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HideMobile;
