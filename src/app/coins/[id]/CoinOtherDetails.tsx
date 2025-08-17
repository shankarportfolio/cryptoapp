import { formatNumber } from "@/app/_lib/convertor";
import { inter, montserrat, outfit } from "@/app/_lib/fonts";
import { ArrowBigDown, ArrowBigUp, Circle } from "lucide-react";

type OtherDetails = {
    apidata: string | number,
    isChangingPrice : boolean,
    topLabelName? : string,
    isPercetageChange : boolean,
    isBTCprice : boolean,
    children?: React.ReactNode
}

const CoinOtherDetails = ({apidata, topLabelName, children, isChangingPrice=false, isPercetageChange=false, isBTCprice=false} : OtherDetails) =>{
    return(
        <div className={`w-full py-[10px] px-[13px] md:px-[20px] rounded-[10px] bg-[#000]`}>
            <span className={`${outfit.className} w-full block text-[12px] loading-[20px] md:text-[14px] md:loading-[24px] text-[#606f7b] mb-[5px]`}>{topLabelName}</span>
            <span className={`${outfit.className} w-full block text-[16px] loading-[26px] text-[#fff] font-[700] ${isPercetageChange && 'flex items-center justify-start'} ${isPercetageChange && ( (parseFloat(String(apidata)) > 0) ? ("text-green-300") : (parseFloat(String(apidata)) < 0) ? ("text-red-300") : ("text-blue-300") )
            } `}>{children}
                {
                    isPercetageChange && (
                        parseFloat(String(apidata)) > 0 ? (
                            <ArrowBigUp className="w-[20px] text-green-300 mr-[5px]" />
                        ) : parseFloat(String(apidata)) < 0 ? (
                            <ArrowBigDown className="w-[20px] text-red-300 mr-[8px]" />
                        ) : (
                            <Circle className="text-[#799EFF] mr-[8px] hidden"/>
                        )
                    )
                }
                {
                    !isChangingPrice && ( isBTCprice ? ('') : (<span className="mr-[3px]">$</span>) )
                }
                {
                    typeof Number(String(apidata)) === 'number' && Number(String(apidata)) > 999 ? formatNumber(Number(String(apidata))) : (Number(String(apidata)))
                }
                {
                    isPercetageChange && "%"
                }
            </span>
        </div>
    )
}

export default CoinOtherDetails;