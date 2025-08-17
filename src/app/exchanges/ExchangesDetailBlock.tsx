import Link from "next/link";
import { outfit } from "../_lib/fonts";
import { ExternalLink } from "lucide-react";
import { formatNumber } from "../_lib/convertor";


type ExchangesDetailBlockProps = {
    apidata: any,
    checkData: boolean,
    labelName : string,
    isVolumeData: boolean,
    isCountryText: boolean
};

const ExchangesDetailBlock = ({apidata, checkData, labelName, isVolumeData=false, isCountryText=false} : ExchangesDetailBlockProps) =>{
    return(
        <div className={`${!checkData ? 'w-1/4' : 'w-full'}`}>
            <span className={`${outfit.className} text-[10px] leading-[12px] text-muted block mb-[5px]`}>{labelName}</span>
            {
                isCountryText ? (
                    <p className={`${outfit.className} text-[13px] font-[400] m-[0]`}>
                        {apidata ? apidata : 'NA'}
                    </p>
                ) : (
                    <h4 className={`${outfit.className} ${!checkData ? 'text-[20px] leading-[30px]' : 'text-[16px] leading-[26px]'} font-[600] m-[0] flex items-center justify-start`}>
                    {
                        isVolumeData && (<span className="mr-[3px]">$</span>)
                    }
                    {
                        isVolumeData ? formatNumber(Number(apidata)) : apidata
                        
                    }
                    </h4>
                )
            }
            
        </div>
    )
}

export default ExchangesDetailBlock;