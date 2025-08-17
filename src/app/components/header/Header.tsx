"use client"
import { MenuIcon, X } from "lucide-react";
import { montserrat, righteous} from "../../_lib/fonts";
import { useEffect, useState } from "react";
import { CoinsIcon, HouseIcon, SwapIcon } from "@phosphor-icons/react";
import AllLinks from "./AllLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () =>{

    const [menu, setMenu] = useState<boolean>(false);

    const dynaroute = usePathname(); 

    useEffect(() => {
        setMenu(false);
    },[dynaroute]);


    return(
        <>
            <header className="w-full bg-black">
                <div className="w-full xl:w-[1200px] m-auto py-[20px] px-[15px] flex items-center justify-center">
                    <Link href="/" className="w-1/2 md:w-1/3 lg:w-1/4 outline-none hover:outline-none focus:outline-none">
                        <span className={`${righteous.className} block text-base md:text-[20px] tracking-[2px] uppercase text-[var(--themecolor)] font-bold`}>Pocket Crypto</span>
                    </Link>
                    <div className="w-1/2 md:w-2/3 lg:w-3/4 flex items-center justify-end">
                        <div className="w-[45px] h-[45px] rounded-[100%] bg-[#191c24] flex items-center justify-center cursor-pointer" onClick={() => setMenu(!menu)}>
                            {
                                menu ? (<X className="text-[var(--themecolor)] w-[25px] h-[25px] cursor-pointer transition-all duration-350 ease-in-out"/>) : (<MenuIcon className="text-[var(--themecolor)] w-[25px] h-[25px] cursor-pointer transition-all duration-350 ease-in-out"/>)
                            }
                        </div>
                    </div>
                </div>
            </header>

            <div className={`w-[75%] md:w-[30%] fixed top-[0] h-screen bg-[#191c24] ${menu ? 'left-[0]' : 'left-[-75%] md:left-[-30%]'} transition-all duration-350 ease-in-out py-[55px] px-[20px] z-[999]`}>
                <AllLinks hreflink="/" pagelabel="Home" clasessList={dynaroute === "/" ? 'bg-[#000] text-[var(--themecolor)]' : ''} iconWrapClass={dynaroute === "/" ? 'bg-[#191c24]' : ''}>
                    <HouseIcon className={`w-[15px] md:w-[25px] xl:w-[40px] fill-[var(--themecolor)] `}/>
                </AllLinks>
                <AllLinks hreflink="/coins" pagelabel="Explore Coins" clasessList={dynaroute === "/coins" ? 'bg-[#000] text-[var(--themecolor)]' : ''} iconWrapClass={dynaroute === "/coins" ? 'bg-[#191c24]' : ''}>
                    <CoinsIcon className={`w-[15px] md:w-[25px] xl:w-[40px] fill-[var(--themecolor)] `} />
                </AllLinks>
                <AllLinks hreflink="/exchanges" pagelabel="Explore Exchanges" clasessList={dynaroute === "/exchanges" ? 'bg-[#000] text-[var(--themecolor)]' : ''} iconWrapClass={dynaroute === "/exchanges" ? 'bg-[#191c24]' : ''}>
                    <SwapIcon className={`w-[15px] md:w-[25px] xl:w-[40px] fill-[var(--themecolor)] `} />
                </AllLinks>
            </div>
        </>
    )
}

export default Header;