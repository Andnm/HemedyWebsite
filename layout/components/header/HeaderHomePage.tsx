"use client";
import React from "react";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS_GENERAL } from "@utils/constants";
import Image from "next/image";

const HeaderHomePage = () => {
  const router = useRouter();
  const [userData, setUserData] = React.useState<any | null>(null);
  const pathName = usePathname();

  const getNavItems = () => {
    if (userData && userData.role_name) {
      switch (userData.role_name) {
        default:
          return NAV_ITEMS_GENERAL;
      }
    } else {
      return NAV_ITEMS_GENERAL;
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {getNavItems().map((item, index) => (
        <p className="p-1 nav-items items-center font-bold" key={index}>
          <Link
            href={item?.path}
            className={`flex items-center text-center ${
              pathName === item?.path ? "active" : ""
            }`}
          >
            {item?.nameItem}
          </Link>
        </p>
      ))}
    </ul>
  );

  return (
    <div className="top-0 z-10 h-max max-w-full border-0 rounded-none px-4 py-2 lg:px-8 lg:py-3">
      <div className="container general-header-container ">
        <div className="flex items-center justify-between text-white px-5 py-2">
          <Link
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium brand-name flex items-center gap-2"
          >
            <Image
              src="/images/logo_with_line_text.png"
              width={63}
              height={80}
              alt="logo"
            />
          </Link>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>

          <button className="hidden lg:inline-block btn-login cursor-pointer">
            <p className="font-medium">Đăng nhập</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
