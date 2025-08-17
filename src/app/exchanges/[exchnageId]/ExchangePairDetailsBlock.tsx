import { formatNumber } from "@/app/_lib/convertor";
import { outfit } from "@/app/_lib/fonts";
import React from "react";

type ExPairsType ={
    labelname: string,
    isVolume: boolean,
    apidata: string | number,
    isQuote: boolean,
    children?: React.ReactNode
}

const ExchangePairDetailsBlock = ({labelname, apidata, isVolume=false, isQuote=false, children} : ExPairsType) =>{
    return(
        <div className="w-full">
            <span className={`${outfit.className} text-[12px] md:text-[10px] leading-[12px] text-muted block mb-[5px]`}>{labelname}</span>
            <h4 className={`${outfit.className} text-[16px] leading-[26px] font-[600] m-[0] flex items-center justify-start`}>{children}{
                isVolume ? formatNumber(Number(String(apidata))) : (!isQuote ? apidata : 'NA')
            }
            </h4>
        </div>
    )
}

export default ExchangePairDetailsBlock;