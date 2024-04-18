"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { NAVBAR_QUERY } from "@/app/utils/constants-query";
import RightArrow from "@/app/assets/icons/RightArrow";
import PrimaryButton from "../../atmos/PrimaryButton";
import Close from "@/app/assets/icons/close";
import MenuIcon from "@/app/assets/icons/menu";
import Loading from "../../atmos/Loading";

export default function Header() {
  const [navOptions, setNavOptions] = useState([]);
  const [megaMenuActive, setMegaMenuActive] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [showOptions, setShowOptions] = useState({});
  const [apiData, setApiData] = useState({});
  const { data, loading } = useQuery(NAVBAR_QUERY);

  useEffect(() => {
    if (data) {
      setApiData(data);
    }
  }, [data]);

  useEffect(() => {
    const options = [];
    apiData?.menus?.nodes[0]?.menuItems?.nodes?.filter((item) => {
      let isMega = false;
      apiData?.themeOptionBy?.header?.megaMenuMain?.map((menu) => {
        if (
          menu.path === item.path &&
          menu?.menu?.length &&
          menu?.menu[0]?.sidebarContent?.length
        ) {
          setShowOptions({
            ...showOptions,
            [menu.path]: 0,
          });
          isMega = menu;
        }
      });
      let navItem = {
        title: item.label,
        link: item?.path,
      };
      if (Boolean(isMega)) {
        options.push({ ...navItem, megaMenu: isMega });
        return;
      }
      options.push({ ...navItem });
      return;
    });
    setNavOptions(options);
  }, [apiData]);

  const authButtons = () => (
    <>
      <Link
        href={
          apiData?.themeOptionBy?.header?.authButtons?.headerSignupButton
            ?.url || ""
        }
        className={`text-nowrap hover:text-[#F93A7A] font-medium w-full text-center ${
          megaMenuActive || menuActive ? "text-black block py-2" : "text-white"
        }`}
      >
        {apiData?.themeOptionBy?.header?.authButtons?.headerSignupButton?.title}
      </Link>
      <PrimaryButton
        text={
          apiData?.themeOptionBy?.header?.authButtons?.headerLoginButton?.title
        }
        link={
          apiData?.themeOptionBy?.header?.authButtons?.headerLoginButton?.url ||
          ""
        }
        icon={
          <RightArrow color={megaMenuActive || menuActive ? "#000" : "#fff"} />
        }
        className={`text-nowrap font-medium block ${
          megaMenuActive || menuActive
            ? "!text-black !border-black w-full"
            : "!text-white"
        }`}
      />
    </>
  );

  const megaMenu = (megaData) => {
    const active = showOptions[megaData.path] || 0;
    return (
      <div className="lg:h-[100vh] bg-transparent w-full mx-auto flex flex-col lg:justify-center">
        <div className="lg:h-[354px] bg-white flex flex-col lg:justify-center lg:px-4 overflow-hidden">
          <div className="max-w-screen-xl border-none lg:!border-t lg:!border-solid mx-auto w-full h-full pt-3 flex lg:flex-row flex-col 1xl:px-0 lg:px-0 lg:items-center overflow-hidden sm:mb-4 mb-6">
            {megaData?.menu?.length > 1 ? (
              <div className="lg:max-w-[240px] h-full max-w-[370px] lg:max-h-[330px] lg:overflow-auto shadow bg-[#DADCFF] lg:py-6 py-5 lg:pl-6 pl-5 lg:pr-7 pr-4 rounded-[30px] lg:mr-7 sm:mb-0 mb-3">
                <ul className="text-[#0C0632] text-sm">
                  {megaData?.menu?.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setShowOptions({
                          ...showOptions,
                          [megaData.path]: i,
                        });
                      }}
                    >
                      <Link
                        href=""
                        className={`${
                          i == active && "bg-white text-[#F93A7A]"
                        } text-[14px] rounded-full px-5 py-3 flex items-center font-medium text-nowrap`}
                      >
                        {/* {item.icon}{" "} */}
                        <Image
                          src={item?.sidebarDetails?.icon?.node?.link}
                          width={16}
                          height={16}
                          alt="marketing image"
                          unoptimized
                        />
                        <span className="ml-2 max-w-[72px] w-full">
                          {item?.sidebarDetails?.title}
                        </span>
                        <RightArrow
                          color={`${i === active ? "#F93A7A" : "transparent"}`}
                          className="text-lg ml-auto"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="w-full max-w-[1046px] !h-fit mx-auto grid md:grid-cols-3 sm:grid-cols-2 items-center justify-center sm:gap-x-[40px] sm:gap-y-6 overflow-auto">
              {megaData?.menu.map((menu, i) => {
                return (
                  <React.Fragment key={i}>
                    {active == i &&
                      menu?.sidebarContent?.map((opt, index) => (
                        <Link
                          href={opt?.redirectLink}
                          key={index}
                          className={`w-full text-black !h-fit flex rounded-[30px] [&_div]:hover:border-[#fff] sm:pl-5  pl-3 sm:pr-5 pr-3 hover:bg-[#FFF2F6] hover:text-[#F93A7A] hover:[&_svg]:text-[#F93A7A] [&_h5]:hover:text-[#F93A7A] [&_p]:hover:text-[#F93A7A99] [&_svg]:h-8 py-4 lg:mb-0 mb-2 group`}
                        >
                          <Image
                            src={opt?.icon?.node?.link}
                            width={32}
                            height={32}
                            alt="mega-menu"
                            className="h-fit group-hover:!filter-none"
                            unoptimized
                            style={{
                              filter: "brightness(0) invert(0)",
                            }}
                          />

                          <div className="border-l border-[#CCC9DA] pl-3 sm:ml-3 ml-2">
                            <h5 className="font-medium text-[#0C0632] text-sm pb-1">
                              {opt?.title}
                            </h5>
                            <p className="text-[#0C063299] font-normal text-[10px] leading-[10.88px]">
                              {opt?.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="flex-1 bg-transparent lg:block hidden"
          onClick={() => setMegaMenuActive(null)}
        />
      </div>
    );
  };

  const menuItems = () => {
    return (
      <>
        {navOptions?.length
          ? navOptions?.map((item, i) =>
              Boolean(item?.megaMenu) ? (
                <div
                  key={i}
                  className={`flex items-center gap-x-2 cursor-pointer lg:py-10 py-3 lg:px-0 px-5 lg:!w-fit !w-full lg:bg-transparent lg:hover:bg-transparent hover:bg-[#FFF2F6] rounded-3xl text-[14.94px] hover:text-[#F93A7A] ${
                    megaMenuActive
                      ? megaMenuActive?.path === item?.link
                        ? "!text-[#F93A7A] [&_svg]:text-[#F93A7A]"
                        : "!text-black"
                      : "lg:text-white text-black"
                  }`}
                  onMouseEnter={() => {
                    setMegaMenuActive(item?.megaMenu);
                  }}
                  onClick={() => {
                    setMegaMenuActive(item?.megaMenu);
                  }}
                >
                  <button className={`font-medium`}>{item.title}</button>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`h-4 w-4 mt-0.5 lg:block hidden transition-all ${
                        megaMenuActive && megaMenuActive?.path === item?.link
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
              ) : (
                <Link
                  key={i}
                  href={""}
                  className={`font-medium lg:py-10 py-3 lg:px-0 px-5 lg:!w-fit !w-full lg:bg-transparent lg:hover:bg-transparent hover:bg-[#FFF2F6] rounded-3xl text-[14.94px] hover:text-[#F93A7A] lg:inline-block block ${
                    item?.link === window.location.pathname
                      ? "text-[#F93A7A]"
                      : megaMenuActive
                      ? "text-black"
                      : "lg:text-white text-black"
                  }`}
                  onMouseEnter={() => {
                    setMegaMenuActive(null);
                  }}
                >
                  {item?.title}
                </Link>
              )
            )
          : null}
      </>
    );
  };

  const closeMenuHandler = () => {
    setMenuActive(false);
    setMegaMenuActive(null);
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div
      className={`w-full ${
        megaMenuActive || menuActive
          ? "lg:bg-white lg:fixed lg:!top-0 z-10"
          : "lg:bg-transparent"
      } ${
        menuActive ? "bg-white fixed !top-0" : "bg-transparent"
      } transition-all 1xl:px-0 sm:px-8 px-4`}
      onMouseLeave={() => setMenuActive(null)}
    >
      <div className="max-w-screen-xl xlg:gap-[70px] gap-[40px] mx-auto flex flex-row items-center justify-between border-b-gray">
        <Link href="/" className="py-4">
          {megaMenuActive || menuActive ? (
            apiData?.themeOptionBy?.header?.logos?.headerDarkLogo?.node
              ?.link ? (
              <Image
                src={
                  apiData?.themeOptionBy?.header?.logos?.headerDarkLogo?.node
                    ?.link
                }
                alt="menu-1"
                width={240}
                height={200}
                className="lg:max-w-[240px] max-w-[156px]"
                unoptimized
                lazyBoundary
              />
            ) : null
          ) : apiData?.themeOptionBy?.header?.logos?.headerLightLogo?.node
              ?.link ? (
            <Image
              src={
                apiData?.themeOptionBy?.header?.logos?.headerLightLogo?.node
                  ?.link
              }
              alt="menu"
              width={240}
              height={200}
              className="lg:max-w-[240px] max-w-[156px]"
              unoptimized
              lazyBoundary
            />
          ) : null}
        </Link>
        <div className="hidden flex-1 gap-x-11 lg:!flex items-center">
          {menuItems()}
        </div>
        {Boolean(megaMenuActive) ? (
          <div
            // onMouseLeave={() => setMegaMenuActive(null)}
            className="lg:flex hidden absolute z-50 justify-center items-center top-[65px] left-0 mt-8 overflow-x-hidden w-full  text-gray-700 bg-transparent shadow-xl group-hover:visible"
          >
            {megaMenu(megaMenuActive)}
          </div>
        ) : null}

        <div className="hidden gap-[24px] items-center lg:!flex">
          {authButtons()}
        </div>

        <div className="flex lg:hidden">
          {menuActive ? (
            <span
              className="relative z-50 sm:text-base text-sm cursor-pointer"
              onClick={() => closeMenuHandler()}
            >
              <Close color={"#000"} size={12} />
            </span>
          ) : (
            <span
              className="cursor-pointer"
              onClick={() => setMenuActive(true)}
            >
              <MenuIcon color={"#fff"} />
            </span>
          )}
        </div>
        {menuActive && (
          <div
            className={`lg:hidden block fixed w-[100%] z-50 h-[calc(100vh_-_63px)] overflow-auto bg-white shadow-2xl top-[65px] right-0 transition-all ease-in-out duration-300 translate-y-0`}
          >
            <div className="h-full flex flex-col pt-[20px]">
              <div className="mb-4 px-[16px] lg:px-[26px]">{menuItems()}</div>
              {Boolean(megaMenuActive) ? (
                <div className="px-[16px] lg:px-[26px]">
                  {megaMenu(megaMenuActive)}
                </div>
              ) : null}
              <div
                className="block gap-[24px] items-center mt-auto w-full"
                style={{ boxShadow: "0px 4px 21.5px 0px #080D2733" }}
              >
                <div className=" max-w-[375px] px-[16px] lg:px-[26px] pt-2 pb-[20px] mx-auto">
                  {authButtons()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
