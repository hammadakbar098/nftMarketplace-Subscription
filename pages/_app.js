import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
// import Button from "./../components/Button/Button";
import React, { useState, useEffect } from "react";
import Style from "../styles/account.module.css";
import { BsBorderTop } from "react-icons/bs";
import { Button } from "./../components/componentsindex";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(false);
  const [bgColor, setBgColor] = useState("#ecf0f3");
  const [themeData, setThemeData] = useState([
    { themeName: "white", color1: "#4c5773", color2: "#ecf0f3" },
    { themeName: "black-yellow", color1: "#ffdf2b", color2: "#232325" },
    { themeName: "black-red", color1: "#8f2c2c", color2: "#0e131f" },
    { themeName: "black-purple", color1: "#9001f5", color2: "#000000" },
    { themeName: "black-tomato", color1: "#ee0823", color2: "#031319" },
    { themeName: "black-pink", color1: "#b901af", color2: "#290222" },
    { themeName: "black-falsa", color1: "#945361", color2: "#30154e" },
    { themeName: "black-dark-pink", color1: "#bb22c3", color2: "#30154e" },
    { themeName: "black-orange", color1: "#ff5b3e", color2: "#282828" },
    { themeName: "black-cyan", color1: "#5DDEE2", color2: "#1B181E" },
    { themeName: "black-light-pink", color1: "#F83166", color2: "#1E1E1E" },
    { themeName: "black-maroon", color1: "#F8316657", color2: "#1E1E1E" },
  ]);
  return (
    <>
      {/* {theme && (
        <div className="themeChangeParent" style={{ backgroundColor: bgColor }}>
          <div className="themeChangeAlign">
            {themeData.map((theme, index) => {
              return (
                <div
                  className="round"
                  onClick={() => {
                    document.body.setAttribute("data-theme", theme.themeName),
                      setBgColor(theme.color1);
                  }}
                >
                  <div
                    className="child1"
                    style={{
                      width: "100%",
                      height: "17.5px",
                      backgroundColor: theme.color1,
                      borderTop: "50%",
                    }}
                  ></div>
                  <div
                    className="child2"
                    style={{
                      width: "100%",
                      height: "17.5px",
                      backgroundColor: theme.color2,
                      borderTop: "50%",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      )} */}

      <div>
        <NFTMarketplaceProvider>
          {/* <Button btnName="Theme" handleClick={() => setTheme(!theme)} /> */}
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </NFTMarketplaceProvider>
      </div>
    </>
  );
};

export default MyApp;
