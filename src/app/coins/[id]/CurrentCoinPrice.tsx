import { inter, montserrat, outfit } from "@/app/_lib/fonts";
import { ArrowBigDown, ArrowBigUp, Circle } from "lucide-react";

type CurrentTypeCoin = {
    labelName : string,
    isPriceChangePercentage : boolean,
    apidata: string | number
}

const CurrentCoinPrice = ({labelName, apidata, isPriceChangePercentage} : CurrentTypeCoin) =>{
    return(
        <div className={`w-full flex items-center justify-start ${isPriceChangePercentage ? 'mt-[10px]' : ''}`}>
            <span className={`${outfit.className} w-auto md:w-3/4 mr-[10px] md:mr-[0] text-[14px] loading-[24px] font-[400] text-[#606f7b] text-right`}>
                {labelName}
            </span>
            <span className={`${outfit.className} w-auto md:w-1/4 text-[16px] loading-[26px] font-[700] tracking-[1px] text-right flex items-center justify-end ${isPriceChangePercentage && ( (parseFloat(String(apidata)) > 0) ? ("text-green-300") : (parseFloat(String(apidata)) < 0) ? ("text-red-300") : ("text-blue-300") )
            }`}>
                {
                    isPriceChangePercentage && (
                        parseFloat(String(apidata)) > 0 ? (
                            <ArrowBigUp className="text-green-300 mr-[5px]" />
                        ) : parseFloat(String(apidata)) < 0 ? (
                            <ArrowBigDown className="text-red-300 mr-[8px]" />
                        ) : (
                            <Circle className="text-[#799EFF] mr-[8px] hidden"/>
                        )
                    )
                }
                {
                    !isPriceChangePercentage && (<span className="mr-[3px]">$</span>)
                }
                {apidata}
                {
                    isPriceChangePercentage && "%"
                }
            </span>
        </div>
    )
}

export default CurrentCoinPrice;