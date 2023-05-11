import React, { useState } from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Profile.module.css";
import images from "../../../img";
import imag from "./user.jpg";

const Profile = ({ currentAccount }) => {
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
      {theme && (
        <div
          className={Style.themeChangeParent}
          style={{ backgroundColor: bgColor }}
        >
          <div className="themeChangeAlign">
            {themeData.map((theme, index) => {
              return (
                <div
                  className="round"
                  onClick={() => {
                    document.body.setAttribute("data-theme", theme.themeName),
                      setBgColor(theme.color1),
                      setTheme(false);
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
      )}
      <div className={Style.profile}>
        <div className={Style.profile_account}>
          <Image
            src={images.user1}
            alt="user profile"
            width={50}
            height={50}
            className={Style.profile_account_img}
          />

          <div className={Style.profile_account_info}>
            <p>Your account</p>
            <small>{currentAccount.slice(0, 15)}..</small>
          </div>
        </div>

        <div className={Style.profile_menu}>
          <div className={Style.profile_menu_one}>
            {/* <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/author" }}>My Profile</Link>
            </p>
          </div> */}
            <div className={Style.profile_menu_one_item}>
              <FaRegImage />
              <p>
                <Link href={{ pathname: "/author" }}>My Items</Link>
              </p>
            </div>
            <div
              className={Style.profile_menu_one_item}
              onClick={() => {
                setTheme(!theme);
              }}
            >
              <FaUserEdit />
              <p>
                <a>Change Theme</a>
              </p>
            </div>
          </div>

          <div className={Style.profile_menu_two}>
            {/* <div className={Style.profile_menu_one_item}>
              <MdHelpCenter />
              <p>
                <Link href={{ pathname: "/contact" }}>Help</Link>
              </p>
            </div> */}
            <div className={Style.profile_menu_one_item}>
              <TbDownload />
              <p>
                <Link href={{ pathname: "/aboutUs" }}>About us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
