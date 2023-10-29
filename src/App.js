import { Frame } from "@shopify/polaris";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopNavBar from "./components/TopNavBar";
import Home from "./pages/Home";
import { createContext, useState } from "react";

export const StyleContext = createContext();

function App() {
  const intitalStyle = {
    iconSize: 50,
    backgroundColor: "#FFFFFF",
    titleColor: "#000000",
    iconColor: "#000000",
    subTitleColor: "#000000",
    isTransparent: false,
    titleFontSize: 12,
    titleFontStyle: "normal",
    subTitleFontSize: 10,
    subTitleFontStyle: "normal",
    blockSize: 0,
    borderGoesUp: 5,
    borderGoesDown: 5,
    blockSpace: 7,
    mobileNav: false,
  };
  const [styleDetails, setStyleDetails] = useState(intitalStyle);
  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    url: "#",
    accessibilityLabel: "Jaded Pixel",
  };

  return (
    <StyleContext.Provider value={[styleDetails, setStyleDetails]}>
      <Frame
        topBar={<TopNavBar />}
        logo={logo}
        navigation={<Sidebar />}
        showMobileNavigation={styleDetails.mobileNav}
        onNavigationDismiss={() =>
          setStyleDetails((p) => ({ ...p, mobileNav: false }))
        }
      >
        <Home />
      </Frame>
    </StyleContext.Provider>
  );
}

export default App;
