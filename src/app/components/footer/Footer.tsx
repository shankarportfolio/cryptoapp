import { montserrat, righteous} from "../../_lib/fonts";

const Footer = ()=>{
    return(
        <footer className="w-full bg-black">
            <div className="w-full xl:w-[1200px] m-auto p-[15px]">
                <p className={`${montserrat.className} text-white text-[14px] leading-[24px] text-center `}>&copy; 2025 Pocket Crypto | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;