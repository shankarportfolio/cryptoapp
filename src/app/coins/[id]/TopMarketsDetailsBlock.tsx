import { formatNumber } from "@/app/_lib/convertor";
import { outfit } from "@/app/_lib/fonts";

type TopDetailType = {
    apidata: string | number,
    labelName: string,
    isNumberValue: boolean,
    isPriceValue: boolean,
    isPriceDecimal: boolean
}

const TopMarketsDetailsBlock = ({labelName, apidata, isNumberValue=false, isPriceValue=false, isPriceDecimal=false} : TopDetailType) =>{

    const formattedData = isNumberValue
        ? formatNumber(Number(Number(apidata).toFixed(2)))
        : apidata;

    return (
        <div className={`w-full`}>
            <span className={`${outfit.className} w-full block text-[12px] leading-[20px] md:text-[14px] md:leading-[24px] text-[#606f7b] mb-[5px]`}>{labelName}</span>
            <span className={`${outfit.className} w-full block text-[16px] leading-[26px] text-[#fff] font-[600]`}>
            {
                isPriceValue && (<span className="mr-[3px]">$</span>)
            }    
            {   
                isPriceDecimal ? (Number(Number(formattedData).toFixed(2))) : formattedData
                
            }</span>
        </div>
    )
}

export default TopMarketsDetailsBlock;