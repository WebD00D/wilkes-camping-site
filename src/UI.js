import styled from "@emotion/styled";
import * as T from "./theme";

export const PageContainer = styled("div")`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: white;

  button {
    color: white;
    background-color: ${T.theme.colors.primary};
    border-radius: 3px;
    // box-shadow: -webkit-box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);
    // -moz-box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);
    // box-shadow: 2px 2px 2px -1px rgba(25,25,25,0.4);

  a:hover {
    // color: ${T.theme.colors.secondary};
  }

  button:hover {
    // border: 1px solid ${T.theme.colors.secondary};
    // border-radius: 3px;
    // color: ${T.theme.colors.secondary};
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
    // color: ${T.theme.colors.secondary};
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

  // .NotInNav {
  //   display: none;
  // }

  @media (min-width: 600px) {
    .mobile {
      display: none;
    }
  }
`;

export const PageHeader = styled("div")`
  width: 100%;
  padding-left: auto;
  padding-right: auto;

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
    text-align: center;
  }

  a {
    color: ${T.theme.colors.dark};
    text-decoration: underline;
  }

  a:hover {
    // color: ${T.theme.colors.primary};
  }

  p {
    line-height: 50%;
  }

  a {
    line-height: 50%;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 200px;
    background-color: red;
  }

  @media (min-width: 600px) and (max-width: 950px) {
    h1 {
      max-width: 750px;
      margin-left: auto;
      margin-right: auto;
    }

  }
`;

export const PageBody = styled("div")`
  background-color: white;

  p {
    color: ${T.theme.colors.dark};
    padding: 8px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 750px;
  }

  @media (min-width: 600px) {
    #HomeCollapse {
      display: none;
    }
  }

  @media (max-width: 600px) {
    #p {
      display: none;
    }

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      background-color: rgb(24, 144, 255);
      color: white;
    }
  }
`;

export const Button = styled("button")`
  background-color: ${T.theme.colors.primary};
`;

export const FormStyle = styled("div")`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  background-color: #fff;
  // border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.65);

  h1 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
    text-align: center;
  }

  a {
    color: ${T.theme.colors.primary};
  }

  .login-form {
    max-width: 400px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }

  .ant-btn-primary {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormBackground = styled("div")`
  background-color: #f7f7f7;
  //  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 0;
  margin-top: 0;
  min-height: calc(100vh - 96px);
`;

export const ProfileStyle = styled("div")`
  height: 100%;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  background-color: #fff;
  // border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.65);
  padding-left: auto;
  padding-right: auto;

  h1 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
    text-align: center;
  }

  h3 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }

  a {
    color: ${T.theme.colors.primary};
  }

  .login-form {
    max-width: 500px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`;

export const MapContainer = styled("div")`
  margin-top: 20px;
  width: 100%;
  height: 600px;

  button {
    background-color: white;
  }

  .mapboxgl-ctrl-geocoder {
    width: 33.3333%;
    font-size: 15px;
    line-height: 20px;
    max-width: 360px;
  }

  .mapboxgl-ctrl-geocoder--icon-search {
    left: 9px;
    width: 18px;
    height: 18px;
  }

  .mapboxgl-ctrl-geocoder--input {
    height: 36px;
    dding: 6px 35px;
  }

  .css-1svksw0 .mapboxgl-ctrl-geocoder--input {
    height: 36px;
    padding: 6px 35px;
  }

  .mapboxgl-ctrl-geocoder--icon {
    top: 9px;
  }
`;

export const CampsitePageContainer = styled("div")`
  max-width: 1000px;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
  margin-bottom: -20px;
  padding: 20px;
  border: 1px solid black;
  text-align: left;
  background-color: white;

  ul {
    background-color: white;
    text-decoration: none;
    border: none;
    display: flex;
    flex-wrap: wrap;
  }

  .ant-layout {
    height: 100%;
  }
`;

export const FlexWrapper = styled("div")`
  display: flex;

  @media (max-width: 600px) {
    #right {
      display: none;
    }
  }

  @media (min-width: 600px) and (max-width: 950px) {
    #right {
      display: none;
    }

`;

export const CampViewSection = styled("div")`
  width: 50%;
  margin: 20px;

  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 375px;
  }

  @media (min-width: 600px) and (max-width: 950px) {
    width: 100%;
  }

  @media (min-width: 950px) {
    #left {
      display: none;
    }
  }

  #Update_Info {
    display: flex;
    justify-content: space-around;
  }
`;

export const CampMapContainer = styled("div")`
  border: 4px solid black;
  width: 100%;
  height: 450px;
  border-radius: 5px;
  min-width: 400px;
`;

export const CampTitle = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;


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


  @media (min-width: 600px) and (max-width: 950px) {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
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
      color: rgba(0, 0, 0, 0.65);
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

  @media (min-width: 600px) and (max-width: 950px) {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;

    #Activities,
    #Amenities {
      margin-top: 16px;
    }
  }

  @media (max-width: 600px) {
    #Activities,
    #Amenities {
      margin-top: 16px;
    }
  }
`;

export const ImgSection = styled("div")`
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  img {
    margin-right: 8px;
    margin-top: 8px;
    width: 200px;
    height: 200px;
  }

  h2 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }
`;

export const ReviewSection = styled("div")`
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  h2 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
  }

  .ant-card {
    margin-bottom: 16px;
    width: 200px;
  }

  a {
    color: ${T.theme.colors.dark};
  }

  @media (max-width: 975px) {
    margin-left: auto;
    margin-right: auto;

    #card {
      max-width: 100%;
    }
  }

  @media (max-width: 975px) {
    .ant-card {
      max-width: 100%;
    }
  }
`;

export const AddCampsite = styled("div")`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  // display: flex;
  // align-content: center;
  padding: 24px;
  background-color: #fff;
  // border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.65);

  h1 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
    text-align: center;
  }

  h3 {
    text-decoration: underline;
    text-decoration-color: ${T.theme.colors.primary};
    text-align: center;
    margin-bottom: 0;
  }

  h5 {
    text-align: center;
    font-style: oblique;
  }

  a {
    color: ${T.theme.colors.primary};
  }

  .login-form {
    max-width: 500px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`;

export const AntFixes = styled("div")`
  .ant-layout-header {
    // height: 50px;
    // change this ^ later
    padding: 0;
    line-height: 24px;
    background: white;
  }

  h1 {
    font-size: 28px;
  }

  h4 {
    font-size: 16px;
  }

  background: white;
`;

export const AntFooterStyle = styled("div")`
  .ant-layout-footer {
    height: 48px;
    background-color: ${T.theme.colors.primary};
    color: white;
    margin: 0;
    display: flex;
    // justify-content: space-between;
    padding: 8px;
    align-items: center;
    border-top: 1px solid black;
  }

  li {
    list-style: none;
  }

  li:not(:last-child) {
    margin-right: 8px;
  }

  a {
    margin-right: 8px;
    color: white;
  }
`;

export const AntHeaderStyle = styled("div")`
  background-color: red;
  height: 100px;
`;
