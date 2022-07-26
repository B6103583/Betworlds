import LogoImage from "@../../../public/image/logo.png";
import "antd/dist/antd.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-3/4 h-30 mx-auto pt-5 ">
        <div className="w-40 sm:w-56 ">
          <Image src={LogoImage} alt="LogoImage" />
        </div>
        <Link href="https://lin.ee/oLFSKPm">
          <a><button className="bg-gradient-to-b from-[#B37834] to-[#FAC54C] text-black font-semibold py-2 px-4 rounded-xl h-11 sm:w-32">
            เข้าสู่ระบบ
        </button></a>
        
        </Link>
    </div>
  );
};

export default Header;
