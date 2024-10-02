"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Modal } from "antd";
import HomeLayout from "@layout/HomeLayout";
import { useRouter } from "next/router";
import Image from "next/image";

const HomeLayoutNoSSR = dynamic(() => import("@layout/HomeLayout"), {
  ssr: false,
});

const SessionPage: React.FC = () => {
  const router = useRouter();

  return (
    <HomeLayoutNoSSR
      content={
        <>
          <div className="flex flex-col justify-center gap-32">
            <img
              src="/images/khám phá sự bình an.png"
              className="container"
              alt="avatar_doc"
            />
            <div className="mb-20 flex justify-center">
              <img
                src="/images/gói.png"
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

export default SessionPage;
