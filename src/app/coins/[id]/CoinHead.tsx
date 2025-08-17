import { inter, montserrat, outfit } from "@/app/_lib/fonts";
import QuoteHeading from "@/app/components/QuoteHeading";

const CoinHead = ({apidata, symbolData} : {apidata : string | number, symbolData?: string}) =>{
    return(
        <div className="w-full md:w-1/2 mb-[15px] md:mb-[0] flex items-center justify-start md:block">
            <QuoteHeading>{apidata}</QuoteHeading>
            <div className={`w-1/3 md:w-full mt-[0] md:mt-[10px] text-right md:text-left`}>
                <span className={`${outfit.className} inline-block text-[14px] loading-[24px] text-[#606f7b] mr-[10px]`}>Symbol:</span>
                <span className={`${outfit.className} inline-block text-[16px] loading-[26px] text-[#fff] font-[700] mr-[10px]`}>{symbolData}</span>
            </div>
        </div>
    )
}

export default CoinHead;