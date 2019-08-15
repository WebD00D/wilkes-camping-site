import styled from "@emotion/styled";
import * as T from "./theme";

export const PageContainer = styled("div")`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const NavBar = styled("div")`
  ul {
    height: 48px;
    width: 100%;
    padding: 8px;
    margin-top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${T.theme.colors.primary};
    border-bottom: 1px solid ${T.theme.colors.dark};
  }

  li {
    list-style-type: none;
  }

  a {
    decoration: none;
    color: white;
  }

  a:hover {
    color: ${T.theme.colors.secondary};
  }

  // a:visited {
  //   color: ${T.theme.colors.tertiary};
  // }

  .NavLeft {
    width: 100%;
  }

  .NavRight {
    display: flex;
    justify-content: center;
    // background-color: red;
    white-space: nowrap;
    margin-right: 8px;

    a {
      width: 100%;
      // background-color: green;
    }

    :last-child {
      margin-right: 16px;
      // background-color: green;
    }
  }

  .NotInNav {
    display: none;
  }
`;

export const PageHeader = styled("div")`
  h1 {
    color: ${T.theme.colors.dark};
    margin-bottom: 0.25em;
  }
  h4 {
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  border-bottom: 2px solid;
  border-bottom-color: ${T.theme.colors.tertiary};
`;

export const PageBody = styled("div")`
  // .sup {
  //   color: blue;
  // }

  p {
    color: ${T.theme.colors.dark};
    padding: 8px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

export const Button = styled("button")`
  background-color: ${T.theme.colors.primary};
`;
