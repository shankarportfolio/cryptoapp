import Link from "next/link";
import { montserrat, righteous} from "../../_lib/fonts";

type LinkData = {
    hreflink : string,
    pagelabel : string,
    children? : React.ReactNode,
    clasessList? : string,
    iconWrapClass? : string
}

const AllLinks = ({hreflink, pagelabel, children, clasessList, iconWrapClass} : LinkData)=>{
    return(
        <Link href={hreflink} prefetch={true} className={`${montserrat.className} group text-[14px] md:text-base text-white font-bold outline-none mb-[10px] md:mb-[15px] focus:outline-none hover:outline-none flex items-center justify-start rounded-[30px] p-[10px] hover:bg-[#000] hover:text-[var(--themecolor)] transition-all duration-350 ease-in-out ${clasessList}`}>
            <div className={`w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-[100%] bg-[#000] flex items-center justify-center mr-[15px] group-hover:bg-[#191c24] transition-all duration-350 ease-in-out ${iconWrapClass}`}>
                {children}
            </div>
            {pagelabel}
        </Link>
    )
}

export default AllLinks;