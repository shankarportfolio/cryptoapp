import Link from "next/link";
import { inter, outfit } from "../_lib/fonts";
import { ArrowBigDown, ArrowBigUp, Circle } from "lucide-react";

type tickerTypes = {
    symbolName: string,
    id: number,
    priceUsd: string | number,
    priceChange: string | number,
    isPercentageChange: boolean 
}

const TickerBox = ({symbolName, id, priceUsd, priceChange, isPercentageChange} : tickerTypes) =>{
    return(
        <Link href={`/coins/${id}`} prefetch={true} className={`w-[200px] py-[15px] px-[20px] mx-[5px] my-[25px] mb-[0] rounded-[10px] bg-[#191c24] block`}>
            <div className={`w-full flex items-center justify-start flex-wrap  border-b-1 border-[#55585d] text-white mb-[5px] pb-[5px]`}>
                <span className={`${inter.className} w-1/3 text-[14px] leading-[24px] font-[600] block`}>{symbolName}</span>
                <span className={`${inter.className} w-2/3 flex items-center justify-end flex-wrap`}>
                    {
                        isPercentageChange && (
                        parseFloat(String(priceChange)) > 0 ? (
                            <>
                                <ArrowBigUp className="text-green-300 mr-[5px]" />
                                <span className={`${outfit.className} text-[14px] text-green-300 font-[500]`}>{priceChange} {isPercentageChange && "%"}</span>
                            </>
                        ) : parseFloat(String(priceChange)) < 0 ? (
                            <>
                                <ArrowBigDown className="text-red-300 mr-[8px]" />
                                <span className={`${outfit.className} text-[14px] text-red-300 font-[500]`}>{priceChange} {isPercentageChange && "%"}</span>
                            </>
                        ) : (
                            <>
                                <Circle className="text-[#799EFF] mr-[8px] hidden"/>
                                <span className={`${outfit.className} text-[14px] text-[#799EFF] font-[500]`}>{priceChange} {isPercentageChange && "%"}</span>
                            </>
                        )
                    )}
                </span>
            </div>
            <div className={`w-full`}>
                <span className={`${outfit.className} text-[16px] leading-[26px] text-white font-[700]`}>$ {priceUsd}</span>
            </div>
        </Link>
    )
}

export default TickerBox;