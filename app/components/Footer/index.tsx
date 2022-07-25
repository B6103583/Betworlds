import LogoImage from "@../../../public/image/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex items-center justify-center w-3/4 h-30 mx-auto p-5">
        <div className="w-56 ">
            <Image src={LogoImage} alt="LogoImage" />
        </div>
    </div>
  )
}

export default Footer