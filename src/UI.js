import styled from "@emotion/styled";
import * as T from "./theme";

export const PageContainer = styled("div")`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 50px;

  // background-color: red;

  button {
    color: white;
    background-color: ${T.theme.colors.primary};
    border-radius: 3px;
    box-shadow: -webkit-box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);
    -moz-box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);
    box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);

  a:hover {
    color: ${T.theme.colors.secondary};
  }

  button:hover {
    // border: 1px solid ${T.theme.colors.secondary};
    border-radius: 3px;
    color: ${T.theme.colors.secondary};
  }
`;

export const NavBar = styled("div")`
  ul {
    height: 48px;
    width: 100%;
    padding: 8px;
    margin-top: 0;
    margin-bottom: 0;
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
    margin-bottom: 0;
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }
  h4 {
    color: ${T.theme.colors.dark};
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  // border-bottom: 2px solid;
  // border-bottom-color: ${T.theme.colors.tertiary};
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

export const FormStyle = styled("div")`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  // margin-top: 24px;
  padding: 24px;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: -webkit-box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);
    -moz-box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);
    box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);


  h1 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }
`;

export const FormBackground = styled("div")`
  background-color: #f7f7f7;
  height: 100%;
`;

export const MapContainer = styled("div")`
  width: 100%;
  height: 600px;
  margin-top: 75px;
  margin-left: auto;
  margin-right: auto;
  padding-left; auto;
  padding-right: auto;
  overflow: hidden;
  border-radius: 5px;
`;

export const MapStyle = styled("div")`
  display: block;
  position: relative;
  margin: 0px auto;
  width: 50%;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  background: #ee8a65;
`;
