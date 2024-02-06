"use client";

import { useTheme } from "next-themes";
import redLogo from '../public/kuzzi_red_logo_bg.png'
import whiteLogo from '../public/kuzzi_white_logo_bg.png'
import Image from "next/image";

const BackDrop = () => {

  const { theme } = useTheme();

  let logo = redLogo;
  if (theme === "light") {
    logo = whiteLogo;
  }

  return ( 
    <div className={`absolute top-0 justify-items-center w-full bg-mainbg`}>
        <Image src={logo} alt="KUZZI. logo" className="items-center"/>
      </div>
   );
}
 
export default BackDrop;