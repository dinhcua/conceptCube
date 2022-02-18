import { Drawer, Menu } from "antd";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./SideMenu.scss";
// import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface Props {
  visible: boolean;
}

const { SubMenu } = Menu;

const Sidemenu = ({ visible }: Props) => {
  const { t } = useTranslation();
  const [openKeys, setOpenKeys] = useState([""]);
  const [activeItem, setActiveItem] = useState(1);

  const openHandle = (key: string, number: number) => {
    setOpenKeys([key]);
    setActiveItem(number);
  };

  return (
    <>
      <Drawer
        placement="right"
        visible={visible}
        width={532}
        style={{ zIndex: "20" }}
        mask={false}
      >
        <div className="menu">
          <Menu
            style={{
              width: 256,
              backgroundColor: "#061440",
              fontSize: 39,
              color: "#fff",
            }}
            mode="inline"
            theme="dark"
            openKeys={openKeys}
            selectable={false}
          >
            <Menu.Item
              key="1"
              onClick={() => {
                openHandle("", 1);

                // eslint-disable-next-line no-restricted-globals
                location.href = "/";
              }}
            >
              {t("sidemenu1")}
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                openHandle("", 2);
              }}
            >
              <Link to={"/works"}>
                <div
                  className={`menu-item ${
                    activeItem === 2 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu2")}
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="11"
              onClick={() => {
                openHandle("", 3);
              }}
            >
              <Link to={"/teams"}>
                <div
                  className={`menu-item ${
                    activeItem === 3 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu3")}
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="13"
              onClick={() => {
                openHandle("", 4);
              }}
            >
              <Link to={"/contact"}>
                <div
                  className={`menu-item ${
                    activeItem === 4 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu4")}
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="menu-line"></div>
        <div className="menu-footer">
          <p>
            {t("sidemenu5")}
            <br />
            {t("sidemenu6")}
          </p>
          <p> {t("sidemenu7")}</p>
          <p>
            {t("sidemenu8")} <br />
            {t("sidemenu9")}
          </p>
          <p>
            {t("sidemenu10")} <br />
            {t("sidemenu11")}
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default Sidemenu;
