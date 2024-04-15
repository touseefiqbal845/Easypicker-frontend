import React from "react";
import Contact from "../easyPicker/contact";
import NavBar from "../features/navbar/Navbar-admin";
import { ThemeProvider } from "styled-components";
import Footer from "../features/common/Footerfirst";
import styled from "styled-components";

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "#ffff",
    white: "#212529",
    black: " #212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },

  media: {
    mobile: "768px",
    tab: "998px",
  },
};
export const NavbarWrapper = styled.div`
  /* Add styles for Navbar */
`;

export const CustomFont = styled.div`
  font-size: 22px;
  margin-right: 4px;
  /* Add other custom font styles */
`;

export const Logo = styled.div`
  width: 295px;
  height: 66px;
  margin-left: -100px;

  @media (max-width: 1250px) {
    width: 100px;
    height: 40px;
    margin-left: 20px;
  }
`;

export const Sidebar = styled.div`
  height: 66px;
  margin-left: -100px;
`;

export const ToggleButton = styled.div`
  /* Add styles for toggle-button */
`;

export const Icons = styled.div`
  @media (max-width: 900px) {
    display: none !important;
  }
`;
const Contactus = () => {
  const data = {
    name: "easyPicker.pk",
  };

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Contact></Contact>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Contactus;
