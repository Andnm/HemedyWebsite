"use client";

import { ReactNode } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlinePersonPin, MdOutlineVideoCameraFront } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrWorkshop } from "react-icons/gr";
import { IoMusicalNotes } from "react-icons/io5";
import { MdOutlineTravelExplore, MdPostAdd } from "react-icons/md";
import { RiHeadphoneFill } from "react-icons/ri";

import { ROLE_ADMIN, ROLE_DOCTOR } from "./constants";
import {
  IoCalendarOutline,
  IoCartOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuFileEdit } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { toast } from "react-toastify";
import Blog from "@components/contentManage/Blog";
import Music from "@components/contentManage/Music";
import Podcast from "@components/contentManage/Podcast";
import Test from "@components/contentManage/Survey";
import Travel from "@components/contentManage/Travel";
import Workshop from "@components/contentManage/Workshop";
import customer from "@services/customer";
import { useSession } from "next-auth/react";

export interface SliderMenuItem {
  key: string;
  icon: ReactNode;
  label: string;
  roles: string[];
}

export const sliderMenu = [
  {
    key: "admin/dashboard",
    icon: <AiOutlineDashboard />,
    label: "Dashboard",
    roles: [ROLE_ADMIN],
  },
  {
    key: "admin/order",
    icon: <IoCartOutline />,
    label: "Đơn hàng",
    roles: [ROLE_ADMIN],
  },
  {
    key: "admin/user",
    icon: <IoPersonCircleOutline />,
    label: "Người dùng",
    roles: [ROLE_ADMIN],
  },
  {
    key: "admin/professional",
    icon: <FaUserDoctor />,
    label: "Chuyên gia",
    roles: [ROLE_ADMIN],
  },
  {
    key: "admin/content",
    icon: <LuFileEdit />,
    label: "Nội dung",
    roles: [ROLE_ADMIN],
  },
  {
    key: "doctor/calendar",
    icon: <IoCalendarOutline />,
    label: "Quản lý lịch hẹn",
    roles: [ROLE_DOCTOR],
  },
  {
    key: "doctor/patient",
    icon: <MdOutlinePersonPin />,
    label: "Quản lý bệnh nhân",
    roles: [ROLE_DOCTOR],
  },
  {
    key: "doctor/call",
    icon: <MdOutlineVideoCameraFront />,
    label: "Cuộc gọi Video",
    roles: [ROLE_DOCTOR],
  },
  {
    key: "doctor/setting",
    icon: <IoSettingsOutline />,
    label: "Cài đặt",
    roles: [ROLE_DOCTOR],
  },
] as SliderMenuItem[];

export const handleActionNotSupport = () => {
  toast.warning("Tính năng chưa hỗ trợ");
};

export const toastError = (error: any) => {
  const messages = error?.response?.data?.message;

  if (Array.isArray(messages)) {
    const combinedMessage = messages.join("\n");
    toast.error(combinedMessage);
  } else {
    toast.error(messages || error.message || "An error occurred");
  }
};

export const checkTheMoneyInWallet = async (
  money: number,
  token: any
): Promise<boolean> => {
  const userProfile = await customer.getCustomerProfile(
    token?.user.access_token!,
    token?.user.email!
  );

  if (money > userProfile?.account_balance) {
    toast.error(
      "Số tiền trong ví không đủ để thực hiện thanh toán. Vui lòng nạp thêm hoặc chọn phương thức khác!",
      {
        autoClose: 5000,
      }
    );
    return false;
  } else {
    return true;
  }
};

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const list_content_admin = [
  {
    key: 1,
    icon: <IoMusicalNotes className="w-10 h-10" />,
    title: "Âm nhạc/ Bài hát",
    description: "Bài hát",
    backgroundColor: "#4999F1",
    color: "white",
    type: "podcast_music",
    component: <Music />,
  },
  {
    key: 2,
    icon: <RiHeadphoneFill className="w-10 h-10" />,
    title: "Podcast/ Bài nghe",
    description: "Bài nghe",
    backgroundColor: "#F5CA52",
    color: "black",
    type: "podcast_podcast",
    component: <Podcast />,
  },
  {
    key: 3,
    icon: <MdPostAdd className="w-10 h-10" />,
    title: "Blog/ Quotes",
    description: "Bài viết",
    backgroundColor: "#00BB93",
    color: "white",
    type: "blog",
    component: <Blog />,
  },
  {
    key: 4,
    icon: <MdOutlineTravelExplore className="w-10 h-10" />,
    title: "Tour du lịch",
    description: "Gói đăng kí",
    backgroundColor: "#FEFFC3",
    color: "black",
    type: "travel",
    component: <Travel />,
  },
  {
    key: 5,
    icon: <GrWorkshop className="w-10 h-10" />,
    title: "Workshop/ Tư vấn",
    description: "Buổi",
    backgroundColor: "#009F67",
    color: "white",
    type: "workshop",
    component: <Workshop />,
  },
  {
    key: 6,
    icon: <BiMessageSquareDetail className="w-10 h-10" />,
    title: "Testing/ Bài kiểm tra",
    description: "Bài test",
    backgroundColor: "#C055D2",
    color: "black",
    type: "survey",
    component: <Test />,
  },
];
