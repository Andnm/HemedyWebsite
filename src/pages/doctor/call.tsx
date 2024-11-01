import dynamic from 'next/dynamic';
import React from 'react'

const ManagerLayoutNoSSR = dynamic(() => import("@layout/ManagerLayout"), {
  ssr: false,
});

const Call = () => {
  return <ManagerLayoutNoSSR content={<div>Chưa hỗ trợ</div>} />;
}

export default Call