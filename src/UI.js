import styled from "@emotion/styled";
import * as T from "./theme";

export const PageContainer = styled("div")`
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
  width: 100%;
  // display: flex;

  h1 {
    color: ${T.theme.colors.dark};
    margin-bottom: 0;
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }

  h2 {
    margin-bottom: 0;
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }
  }

  h3 {
    font-size: ${T.theme.fontSizes.medium};
  }

  h4 {
    color: ${T.theme.colors.dark};
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  a {
    color: ${T.theme.colors.dark};
    text-decoration: underline;
  }

  a:hover {
    color: ${T.theme.colors.primary};
  }

  p {
    line-height: 50%;
  }

  a {
    line-height: 50%;
  }
`;

export const PageBody = styled("div")`
  p {
    color: ${T.theme.colors.dark};
    padding: 8px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 750px;
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
  background-color: #fff;
  border-radius: 8px;
  box-shadow: ${T.theme.boxshadow.boxshadow};

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
  margin-top: 75px;
  max-width: 1200px;
  width: 100%;
  height: 600px;
`;

export const CampsitePageContainer = styled("div")`
  max-width: 1000px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  text-align: left;
  background-color: white;

  p {
    max-width: 400px;
  }

  ul {
    background-color: white;
    text-decoration: none;
    border: none;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 50px;
    }
  }
`;

export const CampViewSection = styled("div")`
  width: 50%;
  margin: 20px;
`;

export const CampMapContainer = styled("div")`
  border: 4px solid black;
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

export const CampTitle = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  h1 {
    margin-top: 0;
    width: 250px;
  }

  #rating {
    width: 400px;
  }
`;

export const CampInfo = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  height: 225px;

  h2 {
    margin: 0;
    margin-bottom: 0;
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }

  #Address {
    width: 35%;
    margin-right: 16px;

    h2:nth-child(2) {
      margin-top: 26px;
    }

    p {
      line-height: 70%;
    }
    a {
      color: ${T.theme.colors.dark};
      text-decoration: underline;
    }
  }

  #Description {
    width: 60%;
    min-width: 260px;
  }

  div {
    width: 50%;
  }
`;

// export const MapStyle = styled("div")`
//   display: block;
//   position: relative;
//   margin: 0px auto;
//   width: 50%;
//   height: 40px;
//   padding: 10px;
//   border: none;
//   border-radius: 3px;
//   font-size: 12px;
//   text-align: center;
//   color: #fff;
//   background: #ee8a65;
// `;
