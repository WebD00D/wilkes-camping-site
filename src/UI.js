import styled from "@emotion/styled";
import * as T from "./theme";

export const PageContainer = styled("div")`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 50px;
  padding-top: 20px;

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

  h1 {
    margin-top: 0;
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
  width: 100%;
  height: 600px;
`;

export const CampsitePageContainer = styled("div")`
  max-width: 1000px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: left;
  background-color: white;
  display: flex;
  //flex-wrap: wrap;

  ul {
    background-color: white;
    text-decoration: none;
    border: none;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CampViewSection = styled("div")`
  width: 50%;
  margin: 20px;

  #Update_Info {
    display: flex;
    justify-content: space-around;
  }
`;

export const CampMapContainer = styled("div")`
  border: 4px solid black;
  width: 100%;
  height: 400px;
  border-radius: 5px;
  min-width: 400px;
`;

export const CampTitle = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  h1 {
    margin-top: 0;
    width: 100%;
  }


  #TitleInfo {
    display: flex;
    justify-content: flex-start;
    flex-wrap; wrap;

    ul {
      padding: 0;
    }

    li {
      font-size: ${T.theme.fontSizes.medium};
      font-weight: bold;
      width: 100%;
    }
  }

`;

export const CampInfo = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;

  h2 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }

  h3 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }

  #Address,
  #Mgmt {
    h2 {
      margin-top: 0;
      margin-bottom: 8px;
    }

    a {
      color: ${T.theme.colors.dark};
      text-decoration: underline;
      line-height: 1.5;
    }

    li {
      line-height: 1.5;
    }
  }

  #Mgmt {
    text-align: left;
  }

  #Description {
    width: 100%;
    min-width: 260px;
    margin-top: 24px;

    p {
      width: 100%;
      margin-right: 0;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 8px;
    }

    li {
      line-height: 1.5;
    }
  }

  #Amenities,
  #Activities {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    width: 280px;

    h3 {
      width: 100%;
      display: block;
      margin: 0;
    }

    ul {
      //list-style-type: circle;
      height: 90px;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    ul li {
      display: flex;
      width: 50%;
      margin-right: 8px;
      line-height: 120%;
    }
  }
`;

export const ImgSection = styled("div")`
  display: flex;
  align-self: flex-end;

  width: 100%;
  height: 250px;

  img {
    width: 200px;
    height: 200px;
  }
`;
