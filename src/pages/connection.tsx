"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Modal } from "antd";
import HomeLayout from "@layout/HomeLayout";
import { useRouter } from "next/router";

const HomeLayoutNoSSR = dynamic(() => import("@layout/HomeLayout"), {
  ssr: false,
});

const ConnectionPage: React.FC = () => {
  const router = useRouter();

  return (
    <HomeLayoutNoSSR
      content={
        <>
          <div className="flex flex-col justify-center">
            <img
              src="/images/banner-team.png"
              className="banner-team-doctor"
              alt="avatar_doc"
            />

            <div className="mb-20 mt-20 flex justify-center">
              <img
                src="/images/list-team.png"
                className="container "
                alt="avatar_doc"
              />
            </div>

            <div className="mb-20 flex justify-center">
              <img
                src="/images/convenience.png"
                className="container "
                alt="avatar_doc"
              />
            </div>

            <div className="mb-20 flex justify-center">
              <img
                src="/images/select-package.png"
                className="container "
                alt="avatar_doc"
              />
            </div>

           
          </div>
        </>
      }
    />
  );
};

export default ConnectionPage;
